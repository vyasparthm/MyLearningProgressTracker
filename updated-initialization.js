// updated-initialization.js
// Updated initialization code

// Updated initialization
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing application...');
    
    // Load saved data
    loadCompletedTasks();
    await loadScheduleShifts();
    
    // Try to load external schedule data first
    try {
        await loadExternalScheduleData();
        console.log('External schedule data loaded successfully');
    } catch (error) {
        console.warn('Failed to load external schedule data, using fallback:', error.message);
        loadFallbackData();
    }
    
    // Initialize Firebase if properly configured
    await initializeFirebase();
    
    // Initialize the schedule app
    setupWeekSelector();
    renderSchedule(currentWeek);
    
    if (isFirebaseInitialized) {
        setupCompletionListener();
    } else {
        console.log('Running in standalone mode - completion tracking will not persist');
        updateAllCharts();
    }
});