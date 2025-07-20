// schedule-csv-converter.js
// Convert existing scheduleConfig.js to CSV format

function convertScheduleToCSV() {
    if (!scheduleData || scheduleData.length === 0) {
        console.error('No schedule data found');
        return;
    }
    
    // CSV headers
    const headers = ['week', 'day', 'time', 'subject', 'category', 'description', 'duration', 'phase'];
    let csv = headers.join(',') + '\n';
    
    // Convert each schedule item
    scheduleData.forEach(item => {
        const values = headers.map(header => {
            let value = item[header] || '';
            
            // Escape commas and quotes in values
            if (value.toString().includes(',') || value.toString().includes('"') || value.toString().includes('\n')) {
                value = `"${value.toString().replace(/"/g, '""')}"`;
            }
            
            return value;
        });
        
        csv += values.join(',') + '\n';
    });
    
    return csv;
}

function downloadScheduleCSV() {
    const csv = convertScheduleToCSV();
    if (!csv) return;
    
    // Create and download file
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai_aviation_schedule_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    console.log('Schedule CSV downloaded successfully');
}

// Add this to your existing app
function addCSVExportButton() {
    const exportButton = document.createElement('button');
    exportButton.textContent = 'Export to CSV';
    exportButton.className = 'bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white';
    exportButton.onclick = downloadScheduleCSV;
    
    // Add to your existing controls
    const controls = document.querySelector('.week-controls') || document.querySelector('.controls');
    if (controls) {
        controls.appendChild(exportButton);
    }
}

// Auto-add export button when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCSVExportButton);
} else {
    addCSVExportButton();
}