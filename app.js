// Global variables - minimized and optimized
let currentWeek = 1;
let scheduleData = null; // Use null instead of empty array
let completedTasks = new Set();
let scheduleShifts = new Map();
let categoryChart = null;

// Add cache management
let dataCache = new Map();
let lastLoadedWeek = null;
const CACHE_MAX_SIZE = 3; // Only cache 3 weeks at a time

// Prevent multiple initialization
let isInitialized = false;
let isInitializing = false;

// Phase definitions - made immutable
const phases = Object.freeze({
    1: Object.freeze({ name: "Foundation Building", weeks: "1-4" }),
    2: Object.freeze({ name: "Core Learning", weeks: "5-16" }),
    3: Object.freeze({ name: "Specialization", weeks: "17-24" }),
    4: Object.freeze({ name: "Job Search", weeks: "25-32" })
});

// Category colors - made immutable
const categoryColors = Object.freeze({
    'AI/ML': Object.freeze({ bg: 'bg-blue-500', text: 'text-blue-100', border: 'border-blue-500' }),
    'Aviation': Object.freeze({ bg: 'bg-green-500', text: 'text-green-100', border: 'border-green-500' }),
    'Programming': Object.freeze({ bg: 'bg-yellow-500', text: 'text-yellow-900', border: 'border-yellow-500' }),
    'Personal': Object.freeze({ bg: 'bg-purple-500', text: 'text-purple-100', border: 'border-purple-500' }),
    'Admin': Object.freeze({ bg: 'bg-gray-500', text: 'text-gray-100', border: 'border-gray-500' })
});

// Add debouncing and throttling utilities
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Simplified initialization - only load week 1
document.addEventListener('DOMContentLoaded', async () => {
    if (isInitialized || isInitializing) {
        return;
    }
    
    isInitializing = true;
    console.log('Initializing app...');
    
    try {
        await loadCompletedTasks();
        await loadScheduleShifts();
        
        setupEventListeners();
        setupWeekSelector();
        
        // Only load week 1 on startup
        currentWeek = 1;
        await renderWeek(1);
        
        isInitialized = true;
        console.log('✅ App initialized with week 1');
    } catch (error) {
        console.error('❌ Failed to initialize:', error);
        showError('Failed to load schedule data.');
    } finally {
        isInitializing = false;
    }
});

// Clean up previous data before loading new
function cleanupScheduleData() {
    if (scheduleData && Array.isArray(scheduleData)) {
        scheduleData.length = 0; // Clear array efficiently
    }
    scheduleData = null;
    
    // Clean up old cache entries
    if (dataCache.size > CACHE_MAX_SIZE) {
        const oldestKey = dataCache.keys().next().value;
        dataCache.delete(oldestKey);
    }
}

// Optimized data loading with caching and duplicate prevention
async function loadScheduleData(week = currentWeek) {
    console.log(`📥 Loading data for week ${week}...`);
    
    // Check cache first
    if (dataCache.has(week)) {
        scheduleData = dataCache.get(week);
        console.log(`🔄 Loaded ${scheduleData.length} items from cache for week ${week}`);
        return;
    }
    
    // Clean up before loading
    cleanupScheduleData();
    
    if (!window.supabaseClient) {
        throw new Error('Supabase client not initialized');
    }
    
    try {
        console.log('🔍 Making Supabase query...');
        const { data, error } = await window.supabaseClient
            .from('schedule_data')
            .select('*')
            .eq('week', week)
            .order('day', { ascending: true })
            .order('time', { ascending: true });
        
        if (error) {
            console.error('❌ Supabase error details:', error);
            throw error;
        }
        
        scheduleData = data || []; // Ensure it's always an array
        
        // Cache the result
        dataCache.set(week, [...scheduleData]);
        
        console.log(`✅ Loaded ${scheduleData.length} items for week ${week}`);
        
    } catch (error) {
        console.error('❌ Database error:', error);
        scheduleData = []; // Fallback to empty array
        throw error;
    }
}

// Optimized task loading
async function loadCompletedTasks() {
    try {
        const saved = localStorage.getItem('completedTasks');
        if (saved) {
            const parsed = JSON.parse(saved);
            completedTasks.clear(); // Clear before adding
            parsed.forEach(task => completedTasks.add(task));
        }
    } catch (error) {
        console.warn('Failed to load completed tasks:', error);
        completedTasks = new Set();
    }
}

// Throttled save function
const saveCompletedTasks = throttle(() => {
    try {
        localStorage.setItem('completedTasks', JSON.stringify([...completedTasks]));
    } catch (error) {
        console.warn('Failed to save completed tasks:', error);
    }
}, 1000); // Save at most once per second

// Optimized schedule shifts loading
async function loadScheduleShifts() {
    try {
        const { data, error } = await window.supabaseClient
            .from('schedule_shifts')
            .select('shifts')
            .eq('id', 'user_shifts')
            .maybeSingle();
        
        if (error) {
            console.warn('Failed to load shifts from database:', error);
            const saved = localStorage.getItem('scheduleShifts');
            if (saved) {
                const parsed = JSON.parse(saved);
                scheduleShifts.clear();
                parsed.forEach(([key, value]) => scheduleShifts.set(key, value));
            }
            return;
        }
        
        if (data?.shifts) {
            scheduleShifts.clear();
            data.shifts.forEach(([key, value]) => scheduleShifts.set(key, value));
            console.log('Schedule shifts loaded from Supabase');
        }
    } catch (error) {
        console.warn('Failed to load shifts from database, using localStorage:', error);
        const saved = localStorage.getItem('scheduleShifts');
        if (saved) {
            const parsed = JSON.parse(saved);
            scheduleShifts.clear();
            parsed.forEach(([key, value]) => scheduleShifts.set(key, value));
        }
    }
}

// Debounced save function
const saveScheduleShifts = debounce(async () => {
    try {
        const shiftsArray = Array.from(scheduleShifts.entries());
        await window.supabaseClient
            .from('schedule_shifts')
            .upsert({
                id: 'user_shifts',
                shifts: shiftsArray
            });
    } catch (error) {
        console.warn('Failed to save to database, using localStorage:', error);
        localStorage.setItem('scheduleShifts', JSON.stringify(Array.from(scheduleShifts.entries())));
    }
}, 2000); // Save at most once per 2 seconds

// Optimized event listeners with cleanup
let eventListeners = [];

function setupEventListeners() {
    cleanupEventListeners();
    
    const weekSelectHandler = async (e) => {
        const newWeek = parseInt(e.target.value);
        if (newWeek !== currentWeek && newWeek >= 1 && newWeek <= 32) {
            console.log(`📅 User selected week ${newWeek}`);
            await renderWeek(newWeek);
        }
    };
    
    const prevWeekHandler = async () => {
        if (currentWeek > 1) {
            const newWeek = currentWeek - 1;
            document.getElementById('weekSelect').value = newWeek;
            await renderWeek(newWeek);
        }
    };
    
    const nextWeekHandler = async () => {
        if (currentWeek < 32) {
            const newWeek = currentWeek + 1;
            document.getElementById('weekSelect').value = newWeek;
            await renderWeek(newWeek);
        }
    };
    
    document.getElementById('weekSelect').addEventListener('change', weekSelectHandler);
    document.getElementById('prevWeek').addEventListener('click', prevWeekHandler);
    document.getElementById('nextWeek').addEventListener('click', nextWeekHandler);
    document.getElementById('resetShifts').addEventListener('click', resetAllShifts);
    
    // Modal listeners
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('taskModal').addEventListener('click', (e) => {
        if (e.target.id === 'taskModal') closeModal();
    });
}

function cleanupEventListeners() {
    eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
    });
    eventListeners = [];
}

// Efficient week selector setup
function setupWeekSelector() {
    const select = document.getElementById('weekSelect');
    
    // Only create options if they don't exist
    if (select.children.length === 0) {
        const fragment = document.createDocumentFragment();
        
        for (let i = 1; i <= 32; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Week ${i}`;
            fragment.appendChild(option);
        }
        
        select.appendChild(fragment);
    }
    
    select.value = currentWeek;
}

// Optimized schedule item processing
function getEffectiveScheduleItem(item) {
    const taskId = `${item.week}-${item.day}-${item.time}-${item.subject}`;
    const shift = scheduleShifts.get(taskId) || 0;
    
    if (shift === 0) return item;
    
    const shifted = getShiftedDate(item.week, item.day, shift);
    return { ...item, week: shifted.week, day: shifted.day };
}

// Optimized date calculation
const dayNames = Object.freeze(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
const dayIndexMap = Object.freeze(Object.fromEntries(dayNames.map((day, index) => [day, index])));

function getShiftedDate(originalWeek, originalDay, daysToShift) {
    const dayIndex = dayIndexMap[originalDay];
    
    const totalDays = (originalWeek - 1) * 7 + dayIndex + daysToShift;
    const newWeek = Math.floor(totalDays / 7) + 1;
    const newDayIndex = totalDays % 7;
    const newDay = dayNames[newDayIndex];
    
    return { week: Math.max(1, Math.min(32, newWeek)), day: newDay };
}

// Throttled shift function
const shiftScheduleItem = throttle((taskId, daysToShift) => {
    scheduleShifts.set(taskId, (scheduleShifts.get(taskId) || 0) + daysToShift);
    saveScheduleShifts();
    renderWeek(currentWeek);
}, 500);

async function resetAllShifts() {
    if (confirm('Reset all schedule shifts? This will restore the original schedule.')) {
        scheduleShifts.clear();
        await saveScheduleShifts();
        // Clear cache to force reload
        dataCache.clear();
        await renderWeek(currentWeek);
    }
}

// Optimized render function with cleanup and duplicate prevention
async function renderWeek(week) {
    currentWeek = week;
    console.log(`🎨 Rendering week ${week}`);
    
    document.getElementById('weekSelect').value = week;
    document.getElementById('weekTitle').textContent = `Week ${week}`;
    
    try {
        await loadScheduleData(week);
        
        // Safe check for scheduleData
        const phase = (scheduleData && scheduleData.length > 0) ? scheduleData[0].phase : 1;
        document.getElementById('weekPhase').textContent = `Phase ${phase}: ${phases[phase].name}`;
        
        // Ensure scheduleData is an array
        const safeScheduleData = scheduleData || [];
        const weekDataWithShifts = safeScheduleData.map(getEffectiveScheduleItem);
        
        renderSchedule(weekDataWithShifts);
        updateStats(weekDataWithShifts);
        updateCategoryChart(weekDataWithShifts);
        
        console.log(`✅ Week ${week} rendered`);
    } catch (error) {
        console.error(`❌ Failed to render week ${week}:`, error);
        showError(`Failed to load week ${week}`);
    }
}

// Optimized DOM manipulation
function renderSchedule(weekData) {
    const container = document.getElementById('scheduleContainer');
    
    // Clear container efficiently
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    if (weekData.length === 0) {
        container.innerHTML = '<div class="text-center text-slate-400 py-8">No sessions scheduled for this week</div>';
        return;
    }
    
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Group by day efficiently
    const groupedByDay = {};
    weekData.forEach(item => {
        if (!groupedByDay[item.day]) {
            groupedByDay[item.day] = [];
        }
        groupedByDay[item.day].push(item);
    });
    
    // Render each day
    dayNames.forEach(day => {
        if (!groupedByDay[day] || groupedByDay[day].length === 0) return;
        
        const daySection = document.createElement('div');
        daySection.className = 'mb-6';
        
        const dayHeader = document.createElement('h4');
        dayHeader.className = 'text-lg font-semibold mb-3 text-slate-200 border-b border-slate-600 pb-2';
        dayHeader.textContent = day;
        daySection.appendChild(dayHeader);
        
        const sessionsContainer = document.createElement('div');
        sessionsContainer.className = 'space-y-3';
        
        groupedByDay[day].forEach(item => {
            const sessionCard = createSessionCard(item);
            sessionsContainer.appendChild(sessionCard);
        });
        
        daySection.appendChild(sessionsContainer);
        fragment.appendChild(daySection);
    });
    
    container.appendChild(fragment);
}

// Optimized session card creation
function createSessionCard(item) {
    const taskId = `${item.week}-${item.day}-${item.time}-${item.subject}`;
    const isCompleted = completedTasks.has(taskId);
    const colors = categoryColors[item.category] || categoryColors['Admin'];
    
    const card = document.createElement('div');
    card.className = `session-card card rounded-lg p-4 cursor-pointer ${isCompleted ? 'completed' : ''} category-${item.category.toLowerCase().replace('/', '')}`;
    
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-sm font-medium text-slate-400">${item.time}</span>
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}">
                        ${item.category}
                    </span>
                </div>
                <h5 class="font-semibold text-slate-100 mb-1">${item.subject}</h5>
                <p class="text-sm text-slate-400 line-clamp-2">${item.description}</p>
            </div>
            <div class="flex items-center gap-2 ml-4">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                       class="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                       data-task-id="${taskId}">
                <button class="btn-warning px-2 py-1 rounded text-xs" title="Move to tomorrow" data-task-id="${taskId}" data-action="shift">
                    +1d
                </button>
            </div>
        </div>
    `;
    
    // Use event delegation instead of inline handlers
    const checkbox = card.querySelector('input[type="checkbox"]');
    const shiftBtn = card.querySelector('button[data-action="shift"]');
    
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompletion(taskId, e.target.checked);
    });
    
    shiftBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shiftScheduleItem(taskId, 1);
    });
    
    card.addEventListener('click', () => showTaskModal(item, taskId));
    
    return card;
}

// Optimized toggle completion
const toggleCompletion = debounce((taskId, completed) => {
    if (completed) {
        completedTasks.add(taskId);
    } else {
        completedTasks.delete(taskId);
    }
    saveCompletedTasks();
    
    // Update UI without full re-render
    const checkbox = document.querySelector(`input[data-task-id="${taskId}"]`);
    if (checkbox) {
        const card = checkbox.closest('.session-card');
        if (completed) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
    }
    
    // Update stats
    if (scheduleData) {
        const weekDataWithShifts = scheduleData.map(getEffectiveScheduleItem);
        updateStats(weekDataWithShifts);
    }
}, 300);

function showTaskModal(item, taskId) {
    const modal = document.getElementById('taskModal');
    const colors = categoryColors[item.category] || categoryColors['Admin'];
    
    document.getElementById('modalTitle').textContent = item.subject;
    document.getElementById('modalCategory').className = `inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors.bg} ${colors.text}`;
    document.getElementById('modalCategory').textContent = item.category;
    document.getElementById('modalDescription').textContent = item.description;
    
    const isCompleted = completedTasks.has(taskId);
    const completeBtn = document.getElementById('modalComplete');
    completeBtn.textContent = isCompleted ? 'Mark Incomplete' : 'Mark Complete';
    completeBtn.onclick = () => {
        toggleCompletion(taskId, !isCompleted);
        closeModal();
    };
    
    document.getElementById('modalShiftNext').onclick = () => {
        shiftScheduleItem(taskId, 1);
        closeModal();
    };
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('taskModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function updateStats(weekData) {
    const total = weekData.length;
    const completed = weekData.filter(item => {
        const taskId = `${item.week}-${item.day}-${item.time}-${item.subject}`;
        return completedTasks.has(taskId);
    }).length;
    
    document.getElementById('totalCount').textContent = total;
    document.getElementById('completedCount').textContent = completed;
    
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    document.getElementById('progressBar').style.width = `${percentage}%`;
}

function updateCategoryChart(weekData) {
    const categoryData = {};
    weekData.forEach(item => {
        categoryData[item.category] = (categoryData[item.category] || 0) + (item.duration || 1);
    });
    
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    // Properly dispose of existing chart
    if (categoryChart) {
        categoryChart.destroy();
        categoryChart = null;
    }
    
    if (Object.keys(categoryData).length === 0) {
        return;
    }
    
    categoryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: [
                    '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#6b7280'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e2e8f0',
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

// Throttled error display
const showError = throttle((message) => {
    // Remove existing error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}, 1000);

function logMemoryUsage() {
    if (performance.memory) {
        console.log('Memory usage:', {
            used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + ' MB',
            total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) + ' MB',
            scheduleDataLength: scheduleData ? scheduleData.length : 0,
            cacheSize: dataCache.size,
            completedTasksSize: completedTasks.size,
            scheduleShiftsSize: scheduleShifts.size
        });
    }
}

// Cleanup function for page unload with debugging
window.addEventListener('beforeunload', () => {
    console.log('🧹 Cleaning up before page unload...');
    cleanupEventListeners();
    if (categoryChart) {
        categoryChart.destroy();
        categoryChart = null;
    }
    dataCache.clear();
    isInitialized = false;
    isInitializing = false;
});

// Add visibility change handler to detect tab switching
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('👁️ Tab became visible');
    } else {
        console.log('🙈 Tab became hidden');
    }
});

// Add debugging for potential causes of reinitialization
if (typeof window.addEventListener === 'function') {
    window.addEventListener('popstate', () => {
        console.log('🔄 Popstate event fired');
    });
    
    window.addEventListener('hashchange', () => {
        console.log('🔗 Hash change event fired');
    });
    
    window.addEventListener('pageshow', (event) => {
        console.log('📄 Page show event fired, persisted:', event.persisted);
    });
    
    window.addEventListener('error', (error) => {
        console.error('💥 Global error:', error);
    });
}

// Performance monitoring
setInterval(() => {
    if (performance.memory) {
        const used = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
        const total = Math.round(performance.memory.totalJSHeapSize / 1024 / 1024);
        
        // Only log if memory usage is concerning
        if (used > 100 || (used - 43) > 20) {
            console.warn('⚠️ High memory usage detected:', {
                used: used + ' MB',
                total: total + ' MB',
                increase: (used - 43) + ' MB from baseline'
            });
        }
    }
}, 30000); // Check every 30 seconds





