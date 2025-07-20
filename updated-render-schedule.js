// updated-render-schedule.js
// Updated renderSchedule function with shift functionality

function renderSchedule(week) {
    const tableBody = document.getElementById('schedule-body');
    const weekTitle = document.getElementById('week-title');
    const notesEl = document.getElementById('week-notes');

    tableBody.innerHTML = '';
    weekTitle.textContent = `Week ${week}`;
    notesEl.textContent = weekNotes[week] || `No notes for Week ${week}.`;

    // Get all items for this week (including shifted items)
    const allItems = scheduleData.map(getEffectiveScheduleItem);
    const weekData = allItems.filter(item => item.week === week);

    if (weekData.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400">No schedule found for Week ${week}.</td></tr>`;
        updateTimeAllocationChart([]);
        return;
    }

    // Sort by day and time
    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    weekData.sort((a, b) => {
        const dayDiff = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
        if (dayDiff !== 0) return dayDiff;
        return a.time.localeCompare(b.time);
    });

    weekData.forEach(item => {
        const taskId = `task-${item.week}-${item.day}-${item.time.replace(/\s/g, '-')}`;
        const isCompleted = completedTasks.has(taskId);
        
        const row = document.createElement('tr');
        row.className = isCompleted ? 'bg-green-900/20' : 'hover:bg-slate-700/50';
        
        // Day cell
        const dayCell = document.createElement('td');
        dayCell.className = 'p-3 text-slate-300';
        dayCell.textContent = item.day;
        row.appendChild(dayCell);

        // Time cell
        const timeCell = document.createElement('td');
        timeCell.className = 'p-3 text-slate-300';
        timeCell.textContent = item.time;
        row.appendChild(timeCell);

        // Activity cell with shift buttons
        const activityCell = document.createElement('td');
        activityCell.className = 'p-3';
        activityCell.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="text-slate-200 cursor-pointer hover:text-blue-400">${item.subject}</span>
                <div class="flex gap-1">
                    <button onclick="shiftScheduleItem('${item.week}-${item.day}-${item.time}-${item.subject}', 1)" 
                            class="text-xs bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded" 
                            title="Move to tomorrow">+1d</button>
                    <button onclick="shiftScheduleItem('${item.week}-${item.day}-${item.time}-${item.subject}', -1)" 
                            class="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded" 
                            title="Move back one day">-1d</button>
                </div>
            </div>
        `;
        row.appendChild(activityCell);

        // Category cell
        const categoryCell = document.createElement('td');
        categoryCell.className = 'p-3';
        categoryCell.innerHTML = `<span class="px-2 py-1 rounded text-xs ${getCategoryColor(item.category)}">${item.category}</span>`;
        row.appendChild(categoryCell);

        // Completion checkbox cell
        const completionCell = document.createElement('td');
        completionCell.className = 'p-3';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isCompleted;
        checkbox.className = 'w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded';
        checkbox.addEventListener('change', (event) => {
            toggleCompletion(taskId, event.target.checked);
        });
        completionCell.appendChild(checkbox);
        row.appendChild(completionCell);

        // Add click listener to the activity name for modal
        activityCell.querySelector('span.cursor-pointer').addEventListener('click', () => {
            showModal(item.subject, item.description);
        });

        tableBody.appendChild(row);
    });

    // Add day-level shift controls
    addDayShiftControls(week);
    updateTimeAllocationChart(weekData);
}

function getCategoryColor(category) {
    switch (category) {
        case 'AI/ML': return 'bg-blue-600 text-white';
        case 'Aviation': return 'bg-green-600 text-white';
        case 'Programming': return 'bg-yellow-600 text-black';
        case 'Personal': return 'bg-purple-600 text-white';
        case 'Admin': return 'bg-gray-600 text-white';
        default: return 'bg-gray-500 text-white';
    }
}