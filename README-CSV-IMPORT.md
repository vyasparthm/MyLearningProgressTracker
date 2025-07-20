# CSV Import Feature for Schedule Management

This feature allows you to import and export your schedule data using CSV files, making it easy to manage your schedule in spreadsheet applications like Excel or Google Sheets.

## Features

- **CSV Import**: Upload CSV files to populate your schedule database
- **CSV Export**: Download your current schedule as a CSV file
- **Data Validation**: Automatic validation of imported data
- **Preview**: Preview CSV data before importing
- **Batch Processing**: Efficient handling of large datasets
- **Replace or Merge**: Option to replace existing data or merge with current schedule

## Setup

### 1. Create the CSV Import Tool

Save the `csv-import-tool.html` file and open it in your browser. This is a standalone tool for managing CSV imports.

### 2. Add CSV Export to Your Main App

Add the `schedule-csv-converter.js` script to your main application:

```html
<script src="schedule-csv-converter.js"></script>
```

This will automatically add an "Export to CSV" button to your app.

## CSV Format

Your CSV file should have these columns (order doesn't matter):

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| week | Integer | Yes | Week number (1-52) |
| day | String | Yes | Day of week (Monday, Tuesday, etc.) |
| time | String | Yes | Time range (e.g., "08:00 - 10:00") |
| subject | String | Yes | Activity title |
| category | String | Yes | Category (AI/ML, Aviation, Programming, etc.) |
| description | String | No | Detailed description |
| duration | Integer | Yes | Duration in hours |
| phase | Integer | Yes | Learning phase (1-4) |

### Example CSV Content:

```csv
week,day,time,subject,category,description,duration,phase
1,Monday,08:00 - 10:00,Prompt Engineering,AI/ML,Learn basic prompt structures,2,1
1,Monday,21:00 - 23:00,Aviation Basics,Aviation,Introduction to flight principles,2,1
1,Tuesday,08:00 - 10:00,GitHub Copilot,AI/ML,Setup and basic usage,2,1
```

## How to Use

### Exporting Current Schedule

1. **From Main App**: Click the "Export to CSV" button that appears in your schedule app
2. **From Import Tool**: Connect to Supabase and click "Export Current Schedule"

### Importing CSV Data

1. Open `csv-import-tool.html` in your browser
2. Enter your Supabase credentials and connect
3. Select your CSV file
4. Choose import options:
   - **Has Headers**: Check if first row contains column names
   - **Replace Existing**: Check to clear current data before import
   - **Validate Data**: Check to validate data before importing
5. Click "Preview CSV" to review the data
6. Click "Import to Database" to complete the import

### Creating CSV from Existing Schedule

If you want to convert your current `scheduleConfig.js` to CSV:

1. Open your browser console on your schedule app page
2. Run: `downloadScheduleCSV()`
3. A CSV file will be downloaded automatically

## Import Options

### Replace vs Merge
- **Replace**: Clears all existing schedule data before importing
- **Merge**: Adds new data alongside existing data (may create duplicates)

### Data Validation
When enabled, the tool checks for:
- Valid week numbers (1-52)
- Valid day names
- Required fields are present
- Valid duration and phase numbers

### Error Handling
- Invalid rows are skipped with warnings
- Detailed error messages for troubleshooting
- Progress tracking for large imports

## Workflow Examples

### 1. Bulk Schedule Creation
1. Create your schedule in Excel/Google Sheets
2. Export as CSV
3. Use the import tool to upload to database

### 2. Schedule Backup
1. Export current schedule to CSV
2. Store CSV file as backup
3. Import later if needed

### 3. Schedule Sharing
1. Export your schedule to CSV
2. Share CSV file with others
3. They can import using the same tool

### 4. External Editing
1. Export current schedule
2. Edit in Excel/Google Sheets
3. Re-import with "Replace Existing" option

## Troubleshooting

### Common Issues

1. **"Missing required columns" error**
   - Ensure your CSV has all required columns
   - Check column names match exactly (case-sensitive)

2. **"Invalid day of week" error**
   - Use full day names: Monday, Tuesday, etc.
   - Check for typos in day names

3. **Import appears to hang**
   - Large files may take time to process
   - Check browser console for errors

4. **Data not appearing in main app**
   - Refresh your main application
   - Check that you're connected to the same Supabase project

### Data Validation Errors

- **Invalid week number**: Must be 1-52
- **Invalid duration**: Must be positive integer
- **Invalid phase**: Must be 1-4
- **Missing subject/category**: These fields cannot be empty

## Advanced Usage

### Custom Column Mapping
The tool automatically detects column names, but you can modify the `detectColumns()` function in the import tool to handle custom column names.

### Batch Size Adjustment
For very large files, you can adjust the `batchSize` variable in the import script to optimize performance.

### Additional Validation
You can extend the `validateRow()` function to add custom validation rules specific to your needs.

## File Structure

After adding CSV import functionality:

```
your-project/
├── index.html (your main app)
├── scheduleConfig.js (existing)
├── csv-import-tool.html (new - standalone import tool)
├── schedule-csv-converter.js (new - adds export to main app)
├── supabase-config.js (existing)
├── schedule-shift.js (existing)
└── README-CSV-IMPORT.md (this file)
```

## Security Notes

- CSV files are processed locally in your browser
- No data is sent to external servers except your Supabase database
- Always validate data before importing to production databases
- Consider backing up your database before large imports