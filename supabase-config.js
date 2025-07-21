// supabase-config.js
// Supabase configuration file

// Replace these with your actual Supabase project values
const SUPABASE_URL = 'https://onbfcxfmfdkvdjlatsfb.supabase.co'; // e.g., 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uYmZjeGZtZmRrdmRqbGF0c2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzI5ODEsImV4cCI6MjA2ODYwODk4MX0.R9aBdLal6TYYKBtoUs4bifvQEfN6ZuXnO43EcKR8N8A'; // Your anon/public key

// Initialize with explicit options
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: false
    },
    global: {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
});

console.log('Supabase client initialized:', supabase);
window.supabaseClient = supabase;
