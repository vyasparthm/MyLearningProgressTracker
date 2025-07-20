// schedule-shift.js
// Schedule shifting functionality

// Global variables for schedule shifting
let scheduleShifts = new Map(); // Track schedule shifts: taskId -> daysShifted

// Schedule shifting functionality
function getShiftedDate(originalWeek, originalDay, daysToShift) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayIndex = dayNames.indexOf(originalDay);
    
    // Calculate total days from start
    const totalDays = (originalWeek - 1) * 7 + dayIndex + daysToShift;
    
    const newWeek = Math.floor(totalDays / 7) + 1;
    const newDayIndex = totalDays % 7;
    const newDay = dayNames[newDayIndex];
    
    return { week: newWeek, day: newDay };
}

function shiftScheduleItem(taskId, daysToShift) {
    scheduleShifts.set(taskId, (scheduleShifts.get(taskId) || 0) + daysToShift);
    saveScheduleShifts();
    renderSchedule(currentWeek);
}

function shiftEntireDay(week, day, daysToShift) {
    const dayTasks = scheduleData.filter(item => item.week === week && item.day === day);
    dayTasks.forEach(task => {
        const taskId = `${task.week}-${task.day}-${task.time}-${task.subject}`;
        shiftScheduleItem(taskId, daysToShift);
    });
}

function getEffectiveScheduleItem(item) {
    const taskId = `${item.week}-${item.day}-${item.time}-${item.subject}`;
    const shift = scheduleShifts.get(taskId) || 0;
    
    if (shift === 0) return item;
    
    const shifted = getShiftedDate(item.week, item.day, shift);
    return { ...item, week: shifted.week, day: shifted.day };
}

// Save/load schedule shifts
async function saveScheduleShifts() {
    try {
        const shiftsArray = Array.from(scheduleShifts.entries());
        await window.supabaseClient.from('schedule_shifts').upsert({
            id: 'user_shifts',
            shifts: shiftsArray
        });
        console.log('Schedule shifts saved to Supabase');
    } catch (error) {
        console.warn('Failed to save to Supabase, using localStorage:', error);
        localStorage.setItem('scheduleShifts', JSON.stringify(Array.from(scheduleShifts.entries())));
    }
}

async function loadScheduleShifts() {
    try {
        const { data } = await window.supabaseClient.from('schedule_shifts').select('shifts').eq('id', 'user_shifts').single();
        if (data?.shifts) {
            scheduleShifts = new Map(data.shifts);
            console.log('Schedule shifts loaded from Supabase');
        }
    } catch (error) {
        console.warn('Failed to load from Supabase, using localStorage:', error);
        const saved = localStorage.getItem('scheduleShifts');
        if (saved) {
            scheduleShifts = new Map(JSON.parse(saved));
        }
    }
}

// Add day-level shift controls
function addDayShiftControls(week) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // Remove existing controls if any
    const existingControls = document.querySelector('.day-shift-controls');
    if (existingControls) {
        existingControls.remove();
    }
    
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'day-shift-controls mt-4 p-4 bg-slate-800 rounded-lg';
    controlsDiv.innerHTML = `
        <h4 class="text-sm font-semibold text-slate-300 mb-2">Shift Entire Days:</h4>
        <div class="flex flex-wrap gap-2">
            ${dayNames.map(day => `
                <div class="flex items-center gap-1">
                    <span class="text-xs text-slate-400">${day}:</span>
                    <button onclick="shiftEntireDay(${week}, '${day}', 1)" class="text-xs bg-yellow-600 hover:bg-yellow-700 px-1 py-0.5 rounded">+1d</button>
                    <button onclick="shiftEntireDay(${week}, '${day}', -1)" class="text-xs bg-blue-600 hover:bg-blue-700 px-1 py-0.5 rounded">-1d</button>
                </div>
            `).join('')}
        </div>
        <div class="mt-2">
            <button onclick="resetAllShifts()" class="text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded">Reset All Shifts</button>
        </div>
    `;
    
    const scheduleCard = document.querySelector('.card');
    scheduleCard.appendChild(controlsDiv);
}

// Reset all schedule shifts
function resetAllShifts() {
    if (confirm('Are you sure you want to reset all schedule shifts? This will restore the original schedule.')) {
        scheduleShifts.clear();
        saveScheduleShifts();
        renderSchedule(currentWeek);
    }
}