// Global variables
let currentWeek = 1;
let scheduleData = [];
let completedTasks = new Set();
let scheduleShifts = new Map();
let categoryChart = null;

// Phase definitions
const phases = {
    1: { name: "Foundation Building", weeks: "1-4" },
    2: { name: "Core Learning", weeks: "5-16" },
    3: { name: "Specialization", weeks: "17-24" },
    4: { name: "Job Search", weeks: "25-32" }
};

// Category colors
const categoryColors = {
    'AI/ML': { bg: 'bg-blue-500', text: 'text-blue-100', border: 'border-blue-500' },
    'Aviation': { bg: 'bg-green-500', text: 'text-green-100', border: 'border-green-500' },
    'Programming': { bg: 'bg-yellow-500', text: 'text-yellow-900', border: 'border-yellow-500' },
    'Personal': { bg: 'bg-purple-500', text: 'text-purple-100', border: 'border-purple-500' },
    'Admin': { bg: 'bg-gray-500', text: 'text-gray-100', border: 'border-gray-500' }
};

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing schedule app...');
    
    try {
        await loadScheduleData();
        await loadCompletedTasks();
        await loadScheduleShifts();
        
        setupEventListeners();
        setupWeekSelector();
        renderWeek(currentWeek);
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Failed to initialize app:', error);
        showError('Failed to load schedule data. Please refresh the page.');
    }
});

// Load schedule data from Supabase - only for current week
async function loadScheduleData(week = currentWeek) {
    console.log(`Loading data for week ${week}...`);
    
    // Check if supabase client exists
    if (!window.supabaseClient) {
        throw new Error('Supabase client not initialized');
    }
    
    try {
        console.log('Making Supabase query...');
        const { data, error } = await window.supabaseClient
            .from('schedule_data')
            .select('*')
            .eq('week', week)
            .order('day', { ascending: true })
            .order('time', { ascending: true });
        
        console.log('Raw Supabase response:', { data, error });
        
        if (error) {
            console.error('Supabase error details:', error);
            throw error;
        }
        
        scheduleData = data || [];
        console.log(`✅ Loaded ${scheduleData.length} items for week ${week}`);
        logMemoryUsage(); // Add this line
        
    } catch (error) {
        console.error('❌ Database error:', error);
        // Fallback to empty array
        scheduleData = [];
        throw error;
    }
}

// Load completed tasks
async function loadCompletedTasks() {
    try {
        const saved = localStorage.getItem('completedTasks');
        if (saved) {
            completedTasks = new Set(JSON.parse(saved));
        }
    } catch (error) {
        console.warn('Failed to load completed tasks:', error);
        completedTasks = new Set();
    }
}

// Save completed tasks
function saveCompletedTasks() {
    try {
        localStorage.setItem('completedTasks', JSON.stringify([...completedTasks]));
    } catch (error) {
        console.warn('Failed to save completed tasks:', error);
    }
}

// Load schedule shifts
async function loadScheduleShifts() {
    try {
        const { data, error } = await window.supabaseClient
            .from('schedule_shifts')
            .select('shifts')
            .eq('id', 'user_shifts')
            .maybeSingle(); // Use maybeSingle() instead of single()
        
        if (error) {
            console.warn('Failed to load shifts from database:', error);
            // Fallback to localStorage
            const saved = localStorage.getItem('scheduleShifts');
            if (saved) {
                scheduleShifts = new Map(JSON.parse(saved));
            }
            return;
        }
        
        if (data?.shifts) {
            scheduleShifts = new Map(data.shifts);
            console.log('Schedule shifts loaded from Supabase');
        }
    } catch (error) {
        console.warn('Failed to load shifts from database, using localStorage:', error);
        const saved = localStorage.getItem('scheduleShifts');
        if (saved) {
            scheduleShifts = new Map(JSON.parse(saved));
        }
    }
}

// Save schedule shifts
async function saveScheduleShifts() {
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
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('prevWeek').addEventListener('click', async () => {
        if (currentWeek > 1) {
            currentWeek--;
            await renderWeek(currentWeek);
        }
    });
    
    document.getElementById('nextWeek').addEventListener('click', async () => {
        if (currentWeek < 32) {
            currentWeek++;
            await renderWeek(currentWeek);
        }
    });
    
    document.getElementById('weekSelect').addEventListener('change', async (e) => {
        currentWeek = parseInt(e.target.value);
        await renderWeek(currentWeek);
    });
    
    document.getElementById('resetShifts').addEventListener('click', resetAllShifts);
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    // Close modal on outside click
    document.getElementById('taskModal').addEventListener('click', (e) => {
        if (e.target.id === 'taskModal') {
            closeModal();
        }
    });
}

// Setup week selector
function setupWeekSelector() {
    const select = document.getElementById('weekSelect');
    select.innerHTML = '';
    
    for (let i = 1; i <= 32; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Week ${i}`;
        select.appendChild(option);
    }
    
    select.value = currentWeek;
}

// Get effective schedule item (with shifts applied)
function getEffectiveScheduleItem(item) {
    const taskId = `${item.week}-${item.day}-${item.time}-${item.subject}`;
    const shift = scheduleShifts.get(taskId) || 0;
    
    if (shift === 0) return item;
    
    const shifted = getShiftedDate(item.week, item.day, shift);
    return { ...item, week: shifted.week, day: shifted.day };
}

// Calculate shifted date
function getShiftedDate(originalWeek, originalDay, daysToShift) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayIndex = dayNames.indexOf(originalDay);
    
    const totalDays = (originalWeek - 1) * 7 + dayIndex + daysToShift;
    const newWeek = Math.floor(totalDays / 7) + 1;
    const newDayIndex = totalDays % 7;
    const newDay = dayNames[newDayIndex];
    
    return { week: Math.max(1, Math.min(32, newWeek)), day: newDay };
}

// Shift schedule item
function shiftScheduleItem(taskId, daysToShift) {
    scheduleShifts.set(taskId, (scheduleShifts.get(taskId) || 0) + daysToShift);
    saveScheduleShifts();
    renderWeek(currentWeek);
}

// Reset all shifts
async function resetAllShifts() {
    if (confirm('Reset all schedule shifts? This will restore the original schedule.')) {
        scheduleShifts.clear();
        await saveScheduleShifts();
        renderWeek(currentWeek);
    }
}

// Render week
async function renderWeek(week) {
    currentWeek = week;
    document.getElementById('weekSelect').value = week;
    document.getElementById('weekTitle').textContent = `Week ${week}`;
    
    try {
        // Load fresh data for this specific week from database
        await loadScheduleData(week);
        
        // Update phase info using the loaded data
        const phase = scheduleData.length > 0 ? scheduleData[0].phase : 1;
        document.getElementById('weekPhase').textContent = `Phase ${phase}: ${phases[phase].name}`;
        
        // Apply shifts to the loaded data (scheduleData is already filtered to current week)
        const weekDataWithShifts = scheduleData.map(getEffectiveScheduleItem);
        
        renderSchedule(weekDataWithShifts);
        updateStats(weekDataWithShifts);
        updateCategoryChart(weekDataWithShifts);
    } catch (error) {
        console.error('Failed to load week data:', error);
        showError(`Failed to load data for week ${week}`);
    }
}

// Render schedule
function renderSchedule(weekData) {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = '';
    
    if (weekData.length === 0) {
        container.innerHTML = '<div class="text-center text-slate-400 py-8">No sessions scheduled for this week</div>';
        return;
    }
    
    // Group by day
    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const groupedByDay = {};
    
    dayOrder.forEach(day => {
        groupedByDay[day] = weekData.filter(item => item.day === day);
    });
    
    // Render each day
    dayOrder.forEach(day => {
        if (groupedByDay[day].length === 0) return;
        
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
        container.appendChild(daySection);
    });
}

// Create session card
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
                       onclick="event.stopPropagation(); toggleCompletion('${taskId}', this.checked)">
                <button onclick="event.stopPropagation(); shiftScheduleItem('${taskId}', 1)" 
                        class="btn-warning px-2 py-1 rounded text-xs" title="Move to tomorrow">
                    +1d
                </button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showTaskModal(item, taskId));
    
    return card;
}

// Toggle completion
function toggleCompletion(taskId, completed) {
    if (completed) {
        completedTasks.add(taskId);
    } else {
        completedTasks.delete(taskId);
    }
    saveCompletedTasks();
    renderWeek(currentWeek);
}

// Show task modal
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

// Close modal
function closeModal() {
    const modal = document.getElementById('taskModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Update stats
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

// Update category chart
function updateCategoryChart(weekData) {
    const categoryData = {};
    weekData.forEach(item => {
        categoryData[item.category] = (categoryData[item.category] || 0) + item.duration;
    });
    
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    if (categoryChart) {
        categoryChart.destroy();
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

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Also add memory monitoring
function logMemoryUsage() {
    if (performance.memory) {
        console.log('Memory usage:', {
            used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + ' MB',
            total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) + ' MB',
            scheduleDataLength: scheduleData.length
        });
    }
}




