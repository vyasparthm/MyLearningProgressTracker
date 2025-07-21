-- Clear existing data
DELETE FROM schedule_data;

-- Insert Week 1 (Starting Monday, July 14, 2025)
INSERT INTO schedule_data (id, week, day, time, subject, category, description, duration, phase) VALUES
('schedule_1_monday_0800', 1, 'Monday', '08:00 - 10:00', 'Prompt Engineering Fundamentals', 'AI/ML', 'Begin "Learn Prompting" interactive course. Focus on basic prompt structures and ethical considerations.', 2, 1),
('schedule_1_monday_2100', 1, 'Monday', '21:00 - 23:00', 'Sporty''s - Aviation Basics', 'Aviation', 'Start Sporty''s Learn to Fly Course. Cover Introduction to Flight and Aerodynamics.', 2, 1),
('schedule_1_tuesday_0800', 1, 'Tuesday', '08:00 - 10:00', 'GitHub Copilot Setup', 'AI/ML', 'Set up GitHub Copilot in your development environment. Complete initial tutorials.', 2, 1),
('schedule_1_tuesday_2100', 1, 'Tuesday', '21:00 - 23:00', 'Sporty''s - Aircraft Systems', 'Aviation', 'Learn about basic aircraft systems: engine, electrical, fuel systems.', 2, 1),
('schedule_1_wednesday_0800', 1, 'Wednesday', '08:00 - 10:00', 'CS50 Python - Week 1 Lecture', 'Programming', 'Engage with the current week''s lecture and initial problem set for Harvard CS50 Python.', 2, 1),
('schedule_1_wednesday_2100', 1, 'Wednesday', '21:00 - 23:00', 'Sporty''s - Airports & Airspace', 'Aviation', 'Learn about different airport types, runway markings, and the classification of airspace.', 2, 1),
('schedule_1_thursday_0800', 1, 'Thursday', '08:00 - 10:00', 'Copilot Project: SSIS Refactor', 'AI/ML', 'Start rewriting one of your SSIS packages using GitHub Copilot assistance. Focus on one small component.', 2, 1),
('schedule_1_thursday_2100', 1, 'Thursday', '21:00 - 23:00', 'Sporty''s - Weather', 'Aviation', 'Study weather patterns, reading METARs and TAFs, and weather decision making.', 2, 1),
('schedule_1_friday_0800', 1, 'Friday', '08:00 - 10:00', 'Prompt Engineering Practice', 'AI/ML', 'Practice advanced prompting techniques. Work on real-world examples.', 2, 1),
('