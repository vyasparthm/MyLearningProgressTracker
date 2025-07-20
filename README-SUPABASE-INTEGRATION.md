# Supabase Integration & Schedule Shifting Setup

This guide will help you integrate Supabase backend and add schedule shifting functionality to your AI & Aviation Training Schedule app.

## Prerequisites

- Existing training schedule app
- Supabase account (free tier is sufficient)
- Basic knowledge of JavaScript

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `ai-aviation-schedule` (or your preferred name)
   - Database Password: Generate a strong password
   - Region: Choose closest to your users
5. Click "Create new project"
6. Wait for project setup (2-3 minutes)

## Step 2: Get Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 3: Set Up Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the schema

## Step 4: Update Your HTML File

### Add Supabase Script Tag

Add this line to your `index.html` **before** your existing scripts:

```html
<!-- Add this line before scheduleConfig.js -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase-config.js"></script>
<script src="schedule-shift.js"></script>
```

### Update Script Loading Order

Your script tags should be in this order:
```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase-config.js"></script>
<script src="scheduleConfig.js"></script>
<script src="schedule-shift.js"></script>
```

## Step 5: Configure Supabase Connection

1. Open `supabase-config.js`
2. Replace the placeholder values:
   ```javascript
   const SUPABASE_URL = 'https://your-actual-project.supabase.co';
   const SUPABASE_ANON_KEY = 'your-actual-anon-key-here';
   ```

## Step 6: Update Your JavaScript Code

### Replace the renderSchedule function

1. Find your existing `renderSchedule` function in `index.html`
2. Replace it with the code from `updated-render-schedule.js`

### Update the initialization code

1. Find your existing `DOMContentLoaded` event listener
2. Replace it with the code from `updated-initialization.js`

### Add the modal description fix

Find this line in your HTML:
```html
<p id="modalDescription" class="text-gray-700"></p>
```

Replace with:
```html
<p id="modalDescription" class="text-slate-200"></p>
```

## Step 7: Test the Integration

1. Open your app in a browser
2. Check the browser console for any errors
3. Try shifting a schedule item using the +1d/-1d buttons
4. Verify that shifts persist after page refresh
5. Test shifting entire days

## Features Added

### Individual Task Shifting
- **+1d button**: Move a single task to the next day
- **-1d button**: Move a single task back one day

### Entire Day Shifting
- Shift all tasks for a specific day forward or backward
- Useful when you miss an entire day

### Data Persistence
- All shifts are saved to Supabase database
- Falls back to localStorage if Supabase is unavailable
- Data syncs across devices

### Reset Functionality
- "Reset All Shifts" button to restore original schedule

## Troubleshooting

### Common Issues

1. **Supabase connection errors**
   - Verify your URL and API key are correct
   - Check browser console for specific error messages
   - Ensure your Supabase project is active

2. **CORS errors**
   - Make sure you're accessing the app via HTTP/HTTPS, not file://
   - Supabase should handle CORS automatically

3. **Database permission errors**
   - Verify the SQL schema was executed successfully
   - Check that RLS policies are created

4. **Shifts not persisting**
   - Check browser console for save/load errors
   - Verify localStorage fallback is working

### Testing Checklist

- [ ] Supabase project created and configured
- [ ] Database schema applied successfully
- [ ] API credentials updated in config file
- [ ] Script tags added in correct order
- [ ] Individual task shifting works
- [ ] Day-level shifting works
- [ ] Shifts persist after page refresh
- [ ] Reset functionality works
- [ ] No console errors

## Next Steps

1. **Deploy to Vercel**: Your app should work with these changes
2. **Add user authentication**: Implement user-specific schedules
3. **Add more features**: Bulk operations, schedule templates, etc.
4. **Optimize performance**: Add caching and batch operations

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all file paths and script inclusions
3. Test with a simple Supabase connection first
4. Ensure your Supabase project has the correct schema

## File Structure

After implementation, your project should have:
```
your-project/
├── index.html (updated)
├── scheduleConfig.js (existing)
├── supabase-config.js (new)
├── schedule-shift.js (new)
├── supabase-schema.sql (for reference)
└── README-SUPABASE-INTEGRATION.md (this file)
```