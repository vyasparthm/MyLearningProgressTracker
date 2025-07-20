-- supabase-schema.sql
-- Database schema for Supabase

-- Create table for storing schedule shifts
CREATE TABLE schedule_shifts (
    id TEXT PRIMARY KEY,
    shifts JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for storing completed tasks (optional, if you want to move away from localStorage)
CREATE TABLE completed_tasks (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    task_id TEXT NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, task_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE schedule_shifts ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_tasks ENABLE ROW LEVEL SECURITY;

-- Create policies (for now, allow all operations - you can restrict later)
CREATE POLICY "Allow all operations on schedule_shifts" ON schedule_shifts
    FOR ALL USING (true);

CREATE POLICY "Allow all operations on completed_tasks" ON completed_tasks
    FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for schedule_shifts
CREATE TRIGGER update_schedule_shifts_updated_at 
    BEFORE UPDATE ON schedule_shifts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();