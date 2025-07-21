
// populate-schedule.js
// Script to populate Supabase with schedule data starting Monday, July 21, 2025

const { createClient } = window.supabase;

// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = 'https://onbfcxfmfdkvdjlatsfb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uYmZjeGZtZmRrdmRqbGF0c2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzI5ODEsImV4cCI6MjA2ODYwODk4MX0.R9aBdLal6TYYKBtoUs4bifvQEfN6ZuXnO43EcKR8N8A'
const supabase = createClient(supabaseUrl, supabaseKey)

// Complete schedule data for all 32 weeks starting Monday, July 21, 2025
const scheduleData = [
    // Phase 1: Foundation Building (Weeks 1-4)
    // Week 1: Monday, July 21, 2025 - Sunday, July 27, 2025
    { week: 1, day: 'Monday', time: '08:00 - 10:00', subject: 'Prompt Engineering Fundamentals', category: 'AI/ML', description: 'Begin "Learn Prompting" interactive course. Focus on basic prompt structures and ethical considerations.', duration: 2, phase: 1 },
    { week: 1, day: 'Monday', time: '21:00 - 23:00', subject: 'Sporty\'s - Aviation Basics', category: 'Aviation', description: 'Start Sporty\'s Learn to Fly Course. Cover Introduction to Flight and Aerodynamics.', duration: 2, phase: 1 },
    { week: 1, day: 'Tuesday', time: '08:00 - 10:00', subject: 'GitHub Copilot Fundamentals', category: 'AI/ML', description: 'Course: GitHub Copilot Fundamentals. Learn to set up and use Copilot for basic code completion.', duration: 2, phase: 1 },
    { week: 1, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Sporty\'s - Aircraft Systems', category: 'Aviation', description: 'Continue Sporty\'s. Study aircraft components, engine types, and basic flight controls.', duration: 2, phase: 1 },
    { week: 1, day: 'Wednesday', time: '08:00 - 10:00', subject: 'AI Tools Exploration', category: 'AI/ML', description: 'Explore various AI tools and platforms. Set up accounts and test basic functionality.', duration: 2, phase: 1 },
    { week: 1, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Sporty\'s - Weather Theory', category: 'Aviation', description: 'Study weather patterns, cloud types, and how weather affects flight operations.', duration: 2, phase: 1 },
    { week: 1, day: 'Thursday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 1 Setup', category: 'Programming', description: 'Set up development environment for Harvard CS50 Python course. Complete initial setup and orientation.', duration: 2, phase: 1 },
    { week: 1, day: 'Thursday', time: '21:00 - 23:00', subject: 'Sporty\'s - Navigation Basics', category: 'Aviation', description: 'Learn basic navigation concepts, charts, and instruments.', duration: 2, phase: 1 },
    { week: 1, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 1 Lecture', category: 'Programming', description: 'Watch Week 1 lecture and begin working on problem set.', duration: 2, phase: 1 },
    { week: 1, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Ground School Review', category: 'Aviation', description: 'Review all aviation topics covered this week. Take practice quizzes.', duration: 2, phase: 1 },
    { week: 1, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Project Planning', category: 'AI/ML', description: 'Plan your first AI project using the tools learned this week. Set up development environment.', duration: 3, phase: 1 },
    { week: 1, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Dedicated time for lunch and personal relaxation.', duration: 3, phase: 1 },
    { week: 1, day: 'Saturday', time: '16:00 - 20:00', subject: 'CS50 Python - Problem Set 1', category: 'Programming', description: 'Complete Week 1 problem set and additional practice exercises.', duration: 4, phase: 1 },
    { week: 1, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Study Session', category: 'Aviation', description: 'Comprehensive review of all aviation topics. Practice test questions.', duration: 3, phase: 1 },
    { week: 1, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation, personal errands, and meal preparation for the week ahead.', duration: 3, phase: 1 },
    { week: 1, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review the past week\'s progress in both AI and aviation. Plan specific goals for Week 2.', duration: 4, phase: 1 },

    // Week 2: July 28 - August 3, 2025
    { week: 2, day: 'Monday', time: '08:00 - 10:00', subject: 'Copilot Project: SSIS Refactor', category: 'AI/ML', description: 'Start rewriting one of your SSIS packages using GitHub Copilot assistance.', duration: 2, phase: 1 },
    { week: 2, day: 'Monday', time: '21:00 - 23:00', subject: 'Sporty\'s - Airports & Airspace', category: 'Aviation', description: 'Learn about different airport types, runway markings, and airspace classification.', duration: 2, phase: 1 },
    { week: 2, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Advanced Prompt Engineering', category: 'AI/ML', description: 'Dive deeper into prompt engineering techniques and best practices.', duration: 2, phase: 1 },
    { week: 2, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Sporty\'s - Radio Communications', category: 'Aviation', description: 'Learn proper radio procedures and phraseology for pilot communications.', duration: 2, phase: 1 },
    { week: 2, day: 'Wednesday', time: '08:00 - 10:00', subject: 'AI Project Development', category: 'AI/ML', description: 'Continue developing your first AI project with hands-on coding.', duration: 2, phase: 1 },
    { week: 2, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Sporty\'s - Federal Aviation Regulations', category: 'Aviation', description: 'Study key FARs (Federal Aviation Regulations) relevant to private pilots.', duration: 2, phase: 1 },
    { week: 2, day: 'Thursday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 2 Lecture', category: 'Programming', description: 'Continue with CS50 Python, focusing on new concepts and problem-solving.', duration: 2, phase: 1 },
    { week: 2, day: 'Thursday', time: '21:00 - 23:00', subject: 'Sporty\'s - Flight Planning', category: 'Aviation', description: 'Practice cross-country flight planning, including fuel, time, and distance calculations.', duration: 2, phase: 1 },
    { week: 2, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 2 Problem Set', category: 'Programming', description: 'Work on Week 2 problem set and practice exercises.', duration: 2, phase: 1 },
    { week: 2, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Practice Test', category: 'Aviation', description: 'Take comprehensive practice exam covering topics from first two weeks.', duration: 2, phase: 1 },
    { week: 2, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Project: SSIS Rewrite Continuation', category: 'AI/ML', description: 'Continue with SSIS package rewrite. Complete a significant module.', duration: 3, phase: 1 },
    { week: 2, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 1 },
    { week: 2, day: 'Saturday', time: '16:00 - 20:00', subject: 'Programming Practice', category: 'Programming', description: 'Additional programming practice and CS50 review.', duration: 4, phase: 1 },
    { week: 2, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Comprehensive Review', category: 'Aviation', description: 'Review all aviation topics covered. Focus on weak areas.', duration: 3, phase: 1 },
    { week: 2, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation, personal errands, and meal preparation.', duration: 3, phase: 1 },
    { week: 2, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review progress and plan for Week 3, focusing on core learning phase.', duration: 4, phase: 1 },

    // Week 3: August 4 - August 10, 2025
    { week: 3, day: 'Monday', time: '08:00 - 10:00', subject: 'Cursor AI + Python Tutorial', category: 'AI/ML', description: 'Explore Cursor AI for Python development. Work through an introductory tutorial or small project.', duration: 2, phase: 1 },
    { week: 3, day: 'Monday', time: '21:00 - 23:00', subject: 'Sporty\'s - Performance & W&B', category: 'Aviation', description: 'Study aircraft performance charts and weight & balance calculations.', duration: 2, phase: 1 },
    { week: 3, day: 'Tuesday', time: '08:00 - 10:00', subject: 'GitHub Copilot Advanced Features', category: 'AI/ML', description: 'Explore advanced Copilot features and integration with development workflow.', duration: 2, phase: 1 },
    { week: 3, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Sporty\'s - Emergency Procedures', category: 'Aviation', description: 'Learn emergency procedures and decision-making for various flight scenarios.', duration: 2, phase: 1 },
    { week: 3, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 3 Lecture', category: 'Programming', description: 'Continue with CS50 Python, focusing on data structures and algorithms.', duration: 2, phase: 1 },
    { week: 3, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Written Test Prep', category: 'Aviation', description: 'Intensive preparation for FAA Private Pilot Written Test.', duration: 2, phase: 1 },
    { week: 3, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Project: Data Analysis Tool', category: 'AI/ML', description: 'Start building a data analysis tool using AI assistance.', duration: 2, phase: 1 },
    { week: 3, day: 'Thursday', time: '21:00 - 23:00', subject: 'Flight School Research', category: 'Aviation', description: 'Research local flight schools and instructors. Schedule discovery flights.', duration: 2, phase: 1 },
    { week: 3, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 3 Problem Set', category: 'Programming', description: 'Work on Week 3 problem set and practice exercises.', duration: 2, phase: 1 },
    { week: 3, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Practice Test 2', category: 'Aviation', description: 'Take second comprehensive practice exam.', duration: 2, phase: 1 },
    { week: 3, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Tools Integration Project', category: 'AI/ML', description: 'Integrate multiple AI tools into a cohesive workflow project.', duration: 3, phase: 1 },
    { week: 3, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 1 },
    { week: 3, day: 'Saturday', time: '16:00 - 20:00', subject: 'Programming Portfolio Setup', category: 'Programming', description: 'Set up GitHub portfolio and document completed projects.', duration: 4, phase: 1 },
    { week: 3, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Ground School Final Review', category: 'Aviation', description: 'Final comprehensive review before transitioning to flight training.', duration: 3, phase: 1 },
    { week: 3, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 1 },
    { week: 3, day: 'Sunday', time: '16:00 - 20:00', subject: 'Phase 1 Review & Phase 2 Planning', category: 'Admin', description: 'Review Phase 1 achievements and plan for Phase 2 transition.', duration: 4, phase: 1 },

    // Week 4: August 11 - August 17, 2025
    { week: 4, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 1', category: 'AI/ML', description: 'Start Fast.ai course. Watch lecture videos and complete initial readings.', duration: 2, phase: 2 },
    { week: 4, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Written Test Final Prep', category: 'Aviation', description: 'Final intensive preparation for FAA Written Test.', duration: 2, phase: 2 },
    { week: 4, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Fast.ai - Practical Deep Learning', category: 'AI/ML', description: 'Work through practical exercises and build first neural network.', duration: 2, phase: 2 },
    { week: 4, day: 'Tuesday', time: '21:00 - 23:00', subject: 'FAA Written Test', category: 'Aviation', description: 'Take the FAA Private Pilot Written Test.', duration: 2, phase: 2 },
    { week: 4, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 4 Lecture', category: 'Programming', description: 'Continue with CS50 Python, focusing on object-oriented programming.', duration: 2, phase: 2 },
    { week: 4, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training Scheduling', category: 'Aviation', description: 'Schedule first flight lessons with instructor.', duration: 2, phase: 2 },
    { week: 4, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Project: Neural Network Implementation', category: 'AI/ML', description: 'Implement a simple neural network from scratch.', duration: 2, phase: 2 },
    { week: 4, day: 'Thursday', time: '21:00 - 23:00', subject: 'Pre-flight Study', category: 'Aviation', description: 'Study pre-flight procedures and aircraft systems for first flight.', duration: 2, phase: 2 },
    { week: 4, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 4 Problem Set', category: 'Programming', description: 'Work on Week 4 problem set focusing on OOP concepts.', duration: 2, phase: 2 },
    { week: 4, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Training Ground School', category: 'Aviation', description: 'Ground school session with flight instructor.', duration: 2, phase: 2 },
    { week: 4, day: 'Saturday', time: '10:00 - 13:00', subject: 'Fast.ai Project Work', category: 'AI/ML', description: 'Work on Fast.ai course project and assignments.', duration: 3, phase: 2 },
    { week: 4, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 4, day: 'Saturday', time: '16:00 - 20:00', subject: 'First Discovery Flight', category: 'Aviation', description: 'First discovery flight with certified instructor.', duration: 4, phase: 2 },
    { week: 4, day: 'Sunday', time: '10:00 - 13:00', subject: 'AI/ML Portfolio Development', category: 'AI/ML', description: 'Document and showcase AI/ML projects in portfolio.', duration: 3, phase: 2 },
    { week: 4, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 4, day: 'Sunday', time: '16:00 - 20:00', subject: 'Week 4 Review & Phase 2 Planning', category: 'Admin', description: 'Review week 4 progress and plan Phase 2 core learning.', duration: 4, phase: 2 },

    // Phase 2: Core Learning (Weeks 5-16)
    // Week 5: August 18 - August 24, 2025
    { week: 5, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 2', category: 'AI/ML', description: 'Continue Fast.ai course with computer vision fundamentals.', duration: 2, phase: 2 },
    { week: 5, day: 'Monday', time: '21:00 - 23:00', subject: 'Flight Training - Lesson 1', category: 'Aviation', description: 'First official flight lesson: basic aircraft control.', duration: 2, phase: 2 },
    { week: 5, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Computer Vision Project', category: 'AI/ML', description: 'Build a computer vision project using Fast.ai techniques.', duration: 2, phase: 2 },
    { week: 5, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Flight Debrief & Study', category: 'Aviation', description: 'Debrief first flight and study for next lesson.', duration: 2, phase: 2 },
    { week: 5, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 5 Lecture', category: 'Programming', description: 'Advanced Python concepts and data structures.', duration: 2, phase: 2 },
    { week: 5, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Weather Deep Dive', category: 'Aviation', description: 'Advanced weather interpretation for flight planning.', duration: 2, phase: 2 },
    { week: 5, day: 'Thursday', time: '08:00 - 10:00', subject: 'Machine Learning Algorithms', category: 'AI/ML', description: 'Study and implement basic ML algorithms from scratch.', duration: 2, phase: 2 },
    { week: 5, day: 'Thursday', time: '21:00 - 23:00', subject: 'Flight Training - Lesson 2', category: 'Aviation', description: 'Second flight lesson: straight and level flight, turns.', duration: 2, phase: 2 },
    { week: 5, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 5 Problem Set', category: 'Programming', description: 'Work on advanced Python programming challenges.', duration: 2, phase: 2 },
    { week: 5, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Debrief & Planning', category: 'Aviation', description: 'Debrief second flight and plan training progression.', duration: 2, phase: 2 },
    { week: 5, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI/ML Research Project', category: 'AI/ML', description: 'Research and implement a novel AI/ML technique.', duration: 3, phase: 2 },
    { week: 5, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 5, day: 'Saturday', time: '16:00 - 20:00', subject: 'Programming Portfolio Update', category: 'Programming', description: 'Update portfolio with new projects and skills.', duration: 4, phase: 2 },
    { week: 5, day: 'Sunday', time: '10:00 - 13:00', subject: 'Flight Training - Lesson 3', category: 'Aviation', description: 'Third flight lesson: climbs, descents, and traffic patterns.', duration: 3, phase: 2 },
    { week: 5, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 5, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 5 progress and plan week 6.', duration: 4, phase: 2 },

    // Week 6: August 25 - August 31, 2025
    { week: 6, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 3', category: 'AI/ML', description: 'Advanced computer vision and transfer learning.', duration: 2, phase: 2 },
    { week: 6, day: 'Monday', time: '21:00 - 23:00', subject: 'Flight Training - Lesson 4', category: 'Aviation', description: 'Fourth flight lesson: slow flight and stalls.', duration: 2, phase: 2 },
    { week: 6, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Transfer Learning Project', category: 'AI/ML', description: 'Implement transfer learning for custom image classification.', duration: 2, phase: 2 },
    { week: 6, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Aerodynamics Deep Study', category: 'Aviation', description: 'Advanced aerodynamics and performance calculations.', duration: 2, phase: 2 },
    { week: 6, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 6 Lecture', category: 'Programming', description: 'File I/O, APIs, and web development basics.', duration: 2, phase: 2 },
    { week: 6, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training - Lesson 5', category: 'Aviation', description: 'Fifth flight lesson: ground reference maneuvers.', duration: 2, phase: 2 },
    { week: 6, day: 'Thursday', time: '08:00 - 10:00', subject: 'Natural Language Processing Intro', category: 'AI/ML', description: 'Introduction to NLP concepts and basic text processing.', duration: 2, phase: 2 },
    { week: 6, day: 'Thursday', time: '21:00 - 23:00', subject: 'Navigation & Cross Country Planning', category: 'Aviation', description: 'Advanced navigation techniques and cross-country flight planning.', duration: 2, phase: 2 },
    { week: 6, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 6 Problem Set', category: 'Programming', description: 'Build a web application using Python.', duration: 2, phase: 2 },
    { week: 6, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Training - Lesson 6', category: 'Aviation', description: 'Sixth flight lesson: emergency procedures practice.', duration: 2, phase: 2 },
    { week: 6, day: 'Saturday', time: '10:00 - 13:00', subject: 'NLP Project Development', category: 'AI/ML', description: 'Build a text analysis or chatbot project.', duration: 3, phase: 2 },
    { week: 6, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 6, day: 'Saturday', time: '16:00 - 20:00', subject: 'Flight Training - Solo Prep', category: 'Aviation', description: 'Intensive solo flight preparation and review.', duration: 4, phase: 2 },
    { week: 6, day: 'Sunday', time: '10:00 - 13:00', subject: 'AI/ML Algorithm Implementation', category: 'AI/ML', description: 'Implement advanced ML algorithms from research papers.', duration: 3, phase: 2 },
    { week: 6, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 6, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 6 progress and plan week 7.', duration: 4, phase: 2 },

    // Week 7: September 1 - September 7, 2025
    { week: 7, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 4', category: 'AI/ML', description: 'Natural language processing and text classification.', duration: 2, phase: 2 },
    { week: 7, day: 'Monday', time: '21:00 - 23:00', subject: 'First Solo Flight', category: 'Aviation', description: 'First solo flight - pattern work and landings.', duration: 2, phase: 2 },
    { week: 7, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Text Classification Project', category: 'AI/ML', description: 'Build a text classification system using NLP techniques.', duration: 2, phase: 2 },
    { week: 7, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Solo Flight Debrief', category: 'Aviation', description: 'Debrief solo flight and plan continued training.', duration: 2, phase: 2 },
    { week: 7, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 7 Lecture', category: 'Programming', description: 'Database integration and SQL with Python.', duration: 2, phase: 2 },
    { week: 7, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training - Cross Country Prep', category: 'Aviation', description: 'Prepare for first cross-country flight.', duration: 2, phase: 2 },
    { week: 7, day: 'Thursday', time: '08:00 - 10:00', subject: 'Deep Learning Optimization', category: 'AI/ML', description: 'Study optimization techniques for neural networks.', duration: 2, phase: 2 },
    { week: 7, day: 'Thursday', time: '21:00 - 23:00', subject: 'Flight Training - Cross Country Flight', category: 'Aviation', description: 'First cross-country flight with instructor.', duration: 2, phase: 2 },
    { week: 7, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 7 Problem Set', category: 'Programming', description: 'Build a database-driven application.', duration: 2, phase: 2 },
    { week: 7, day: 'Friday', time: '21:00 - 23:00', subject: 'Cross Country Debrief', category: 'Aviation', description: 'Debrief cross-country flight and navigation techniques.', duration: 2, phase: 2 },
    { week: 7, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Model Deployment', category: 'AI/ML', description: 'Learn to deploy AI models to production environments.', duration: 3, phase: 2 },
    { week: 7, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 7, day: 'Saturday', time: '16:00 - 20:00', subject: 'Flight Training - Night Flying Prep', category: 'Aviation', description: 'Prepare for night flying requirements.', duration: 4, phase: 2 },
    { week: 7, day: 'Sunday', time: '10:00 - 13:00', subject: 'Full-Stack AI Application', category: 'AI/ML', description: 'Build a complete AI application with frontend and backend.', duration: 3, phase: 2 },
    { week: 7, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 7, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 7 progress and plan week 8.', duration: 4, phase: 2 },

    // Week 8: September 8 - September 14, 2025
    { week: 8, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 5', category: 'AI/ML', description: 'Collaborative filtering and recommendation systems.', duration: 2, phase: 2 },
    { week: 8, day: 'Monday', time: '21:00 - 23:00', subject: 'Night Flying Training', category: 'Aviation', description: 'Night flying training and procedures.', duration: 2, phase: 2 },
    { week: 8, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Recommendation System Project', category: 'AI/ML', description: 'Build a recommendation system using collaborative filtering.', duration: 2, phase: 2 },
    { week: 8, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Instrument Flying Introduction', category: 'Aviation', description: 'Introduction to instrument flying concepts.', duration: 2, phase: 2 },
    { week: 8, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Week 8 Lecture', category: 'Programming', description: 'Advanced web development and frameworks.', duration: 2, phase: 2 },
    { week: 8, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training - Solo Cross Country', category: 'Aviation', description: 'Solo cross-country flight planning and execution.', duration: 2, phase: 2 },
    { week: 8, day: 'Thursday', time: '08:00 - 10:00', subject: 'Generative AI Models', category: 'AI/ML', description: 'Study generative models and GANs.', duration: 2, phase: 2 },
    { week: 8, day: 'Thursday', time: '21:00 - 23:00', subject: 'Advanced Flight Maneuvers', category: 'Aviation', description: 'Practice advanced flight maneuvers and precision flying.', duration: 2, phase: 2 },
    { week: 8, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Final Project Planning', category: 'Programming', description: 'Plan and start CS50 Python final project.', duration: 2, phase: 2 },
    { week: 8, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Training - Checkride Prep', category: 'Aviation', description: 'Begin preparation for private pilot checkride.', duration: 2, phase: 2 },
    { week: 8, day: 'Saturday', time: '10:00 - 13:00', subject: 'Generative AI Project', category: 'AI/ML', description: 'Build a generative AI project (text, image, or music).', duration: 3, phase: 2 },
    { week: 8, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 8, day: 'Saturday', time: '16:00 - 20:00', subject: 'Flight Training - Long Cross Country', category: 'Aviation', description: 'Long solo cross-country flight (required for PPL).', duration: 4, phase: 2 },
    { week: 8, day: 'Sunday', time: '10:00 - 13:00', subject: 'AI Ethics and Bias Study', category: 'AI/ML', description: 'Study AI ethics, bias detection, and mitigation strategies.', duration: 3, phase: 2 },
    { week: 8, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 8, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 8 progress and plan week 9.', duration: 4, phase: 2 },

    // Week 9: September 15 - September 21, 2025
    { week: 9, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 6', category: 'AI/ML', description: 'Regularization and data augmentation techniques.', duration: 2, phase: 2 },
    { week: 9, day: 'Monday', time: '21:00 - 23:00', subject: 'Checkride Oral Prep', category: 'Aviation', description: 'Prepare for oral portion of private pilot checkride.', duration: 2, phase: 2 },
    { week: 9, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Data Augmentation Project', category: 'AI/ML', description: 'Implement advanced data augmentation techniques.', duration: 2, phase: 2 },
    { week: 9, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Flight Training - Precision Maneuvers', category: 'Aviation', description: 'Practice precision maneuvers for checkride.', duration: 2, phase: 2 },
    { week: 9, day: 'Wednesday', time: '08:00 - 10:00', subject: 'CS50 Python - Final Project Development', category: 'Programming', description: 'Continue development of CS50 final project.', duration: 2, phase: 2 },
    { week: 9, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Mock Checkride - Oral', category: 'Aviation', description: 'Mock oral examination with instructor.', duration: 2, phase: 2 },
    { week: 9, day: 'Thursday', time: '08:00 - 10:00', subject: 'Reinforcement Learning Intro', category: 'AI/ML', description: 'Introduction to reinforcement learning concepts.', duration: 2, phase: 2 },
    { week: 9, day: 'Thursday', time: '21:00 - 23:00', subject: 'Mock Checkride - Flight', category: 'Aviation', description: 'Mock flight test with instructor.', duration: 2, phase: 2 },
    { week: 9, day: 'Friday', time: '08:00 - 10:00', subject: 'CS50 Python - Final Project Completion', category: 'Programming', description: 'Complete and submit CS50 Python final project.', duration: 2, phase: 2 },
    { week: 9, day: 'Friday', time: '21:00 - 23:00', subject: 'Checkride Final Prep', category: 'Aviation', description: 'Final preparation and review for checkride.', duration: 2, phase: 2 },
    { week: 9, day: 'Saturday', time: '10:00 - 13:00', subject: 'RL Project Implementation', category: 'AI/ML', description: 'Implement a simple reinforcement learning project.', duration: 3, phase: 2 },
    { week: 9, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 9, day: 'Saturday', time: '16:00 - 20:00', subject: 'Private Pilot Checkride', category: 'Aviation', description: 'Official private pilot checkride examination.', duration: 4, phase: 2 },
    { week: 9, day: 'Sunday', time: '10:00 - 13:00', subject: 'AI/ML Portfolio Finalization', category: 'AI/ML', description: 'Finalize AI/ML portfolio with all completed projects.', duration: 3, phase: 2 },
    { week: 9, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 9, day: 'Sunday', time: '16:00 - 20:00', subject: 'PPL Celebration & Week Review', category: 'Admin', description: 'Celebrate PPL achievement and review week 9.', duration: 4, phase: 2 },

    // Week 10: September 22 - September 28, 2025
    { week: 10, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 7', category: 'AI/ML', description: 'Advanced architectures and model interpretation.', duration: 2, phase: 2 },
    { week: 10, day: 'Monday', time: '21:00 - 23:00', subject: 'Post-PPL Flying - Proficiency', category: 'Aviation', description: 'Maintain proficiency with recreational flying.', duration: 2, phase: 2 },
    { week: 10, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Model Interpretation Project', category: 'AI/ML', description: 'Build tools for interpreting and explaining AI models.', duration: 2, phase: 2 },
    { week: 10, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Advanced Aviation - IFR Intro', category: 'Aviation', description: 'Introduction to instrument flight rules and procedures.', duration: 2, phase: 2 },
    { week: 10, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Advanced Python - Async Programming', category: 'Programming', description: 'Learn asynchronous programming in Python.', duration: 2, phase: 2 },
    { week: 10, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Cross Country Flying', category: 'Aviation', description: 'Practice cross-country navigation and flight planning.', duration: 2, phase: 2 },
    { week: 10, day: 'Thursday', time: '08:00 - 10:00', subject: 'MLOps Introduction', category: 'AI/ML', description: 'Introduction to MLOps and model lifecycle management.', duration: 2, phase: 2 },
    { week: 10, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Weather Advanced', category: 'Aviation', description: 'Advanced weather interpretation and decision making.', duration: 2, phase: 2 },
    { week: 10, day: 'Friday', time: '08:00 - 10:00', subject: 'Python Performance Optimization', category: 'Programming', description: 'Optimize Python code for performance and scalability.', duration: 2, phase: 2 },
    { week: 10, day: 'Friday', time: '21:00 - 23:00', subject: 'Night Cross Country Flight', category: 'Aviation', description: 'Night cross-country flight for experience building.', duration: 2, phase: 2 },
    { week: 10, day: 'Saturday', time: '10:00 - 13:00', subject: 'MLOps Pipeline Project', category: 'AI/ML', description: 'Build an end-to-end MLOps pipeline.', duration: 3, phase: 2 },
    { week: 10, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 10, day: 'Saturday', time: '16:00 - 20:00', subject: 'Advanced Programming Project', category: 'Programming', description: 'Build an advanced Python application with modern practices.', duration: 4, phase: 2 },
    { week: 10, day: 'Sunday', time: '10:00 - 13:00', subject: 'AI Research Paper Study', category: 'AI/ML', description: 'Study and implement techniques from recent AI research papers.', duration: 3, phase: 2 },
    { week: 10, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 10, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 10 progress and plan week 11.', duration: 4, phase: 2 },

    // Week 11: September 29 - October 5, 2025
    { week: 11, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Deep Learning - Lesson 8', category: 'AI/ML', description: 'Advanced optimization and training techniques.', duration: 2, phase: 2 },
    { week: 11, day: 'Monday', time: '21:00 - 23:00', subject: 'Complex Airspace Navigation', category: 'Aviation', description: 'Navigate complex airspace and busy airports.', duration: 2, phase: 2 },
    { week: 11, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Advanced Optimization Project', category: 'AI/ML', description: 'Implement advanced optimization techniques for deep learning.', duration: 2, phase: 2 },
    { week: 11, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Formation Flying Training', category: 'Aviation', description: 'Learn formation flying techniques and safety procedures.', duration: 2, phase: 2 },
    { week: 11, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Microservices Architecture', category: 'Programming', description: 'Design and implement microservices architecture.', duration: 2, phase: 2 },
    { week: 11, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aerobatic Flying Introduction', category: 'Aviation', description: 'Introduction to basic aerobatic maneuvers.', duration: 2, phase: 2 },
    { week: 11, day: 'Thursday', time: '08:00 - 10:00', subject: 'Computer Vision Advanced', category: 'AI/ML', description: 'Advanced computer vision techniques and applications.', duration: 2, phase: 2 },
    { week: 11, day: 'Thursday', time: '21:00 - 23:00', subject: 'Mountain Flying Training', category: 'Aviation', description: 'Learn mountain flying techniques and safety considerations.', duration: 2, phase: 2 },
    { week: 11, day: 'Friday', time: '08:00 - 10:00', subject: 'Cloud Architecture Design', category: 'Programming', description: 'Design scalable cloud-based applications.', duration: 2, phase: 2 },
    { week: 11, day: 'Friday', time: '21:00 - 23:00', subject: 'Tailwheel Aircraft Training', category: 'Aviation', description: 'Learn to fly tailwheel aircraft for additional skills.', duration: 2, phase: 2 },
    { week: 11, day: 'Saturday', time: '10:00 - 13:00', subject: 'Advanced CV Application', category: 'AI/ML', description: 'Build an advanced computer vision application.', duration: 3, phase: 2 },
    { week: 11, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 11, day: 'Saturday', time: '16:00 - 20:00', subject: 'Cloud Deployment Project', category: 'Programming', description: 'Deploy applications to cloud platforms with CI/CD.', duration: 4, phase: 2 },
    { week: 11, day: 'Sunday', time: '10:00 - 13:00', subject: 'Long Cross Country Flight', category: 'Aviation', description: 'Extended cross-country flight for experience building.', duration: 3, phase: 2 },
    { week: 11, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 11, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 11 progress and plan week 12.', duration: 4, phase: 2 },

    // Week 12: October 6 - October 12, 2025
    { week: 12, day: 'Monday', time: '08:00 - 10:00', subject: 'Fast.ai Course Completion', category: 'AI/ML', description: 'Complete Fast.ai course and final project.', duration: 2, phase: 2 },
    { week: 12, day: 'Monday', time: '21:00 - 23:00', subject: 'Advanced Flight Planning', category: 'Aviation', description: 'Advanced flight planning for complex routes.', duration: 2, phase: 2 },
    { week: 12, day: 'Tuesday', time: '08:00 - 10:00', subject: 'AI Research Implementation', category: 'AI/ML', description: 'Implement cutting-edge AI research in a practical project.', duration: 2, phase: 2 },
    { week: 12, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Multi-Engine Aircraft Intro', category: 'Aviation', description: 'Introduction to multi-engine aircraft systems.', duration: 2, phase: 2 },
    { week: 12, day: 'Wednesday', time: '08:00 - 10:00', subject: 'DevOps and Automation', category: 'Programming', description: 'Implement DevOps practices and automation tools.', duration: 2, phase: 2 },
    { week: 12, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Commercial Pilot Ground School', category: 'Aviation', description: 'Begin commercial pilot ground school preparation.', duration: 2, phase: 2 },
    { week: 12, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Model Optimization', category: 'AI/ML', description: 'Advanced techniques for optimizing AI model performance.', duration: 2, phase: 2 },
    { week: 12, day: 'Thursday', time: '21:00 - 23:00', subject: 'Instrument Rating Prep', category: 'Aviation', description: 'Begin preparation for instrument rating.', duration: 2, phase: 2 },
    { week: 12, day: 'Friday', time: '08:00 - 10:00', subject: 'Security and Testing', category: 'Programming', description: 'Implement security best practices and comprehensive testing.', duration: 2, phase: 2 },
    { week: 12, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Career Planning', category: 'Aviation', description: 'Plan potential aviation career paths and requirements.', duration: 2, phase: 2 },
    { week: 12, day: 'Saturday', time: '10:00 - 13:00', subject: 'Capstone AI Project', category: 'AI/ML', description: 'Begin comprehensive AI capstone project.', duration: 3, phase: 2 },
    { week: 12, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 2 },
    { week: 12, day: 'Saturday', time: '16:00 - 20:00', subject: 'Full-Stack Application', category: 'Programming', description: 'Build a complete full-stack application.', duration: 4, phase: 2 },
    { week: 12, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Skills Assessment', category: 'Aviation', description: 'Comprehensive assessment of aviation skills and knowledge.', duration: 3, phase: 2 },
    { week: 12, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 2 },
    { week: 12, day: 'Sunday', time: '16:00 - 20:00', subject: 'Phase 2 Review & Phase 3 Planning', category: 'Admin', description: 'Review Phase 2 achievements and plan Phase 3 specialization.', duration: 4, phase: 2 },

    // Week 13: October 13 - October 19, 2025
    { week: 13, day: 'Monday', time: '08:00 - 10:00', subject: 'LLM Specialization - Course 1', category: 'AI/ML', description: 'Begin LLM specialization with transformer architectures.', duration: 2, phase: 3 },
    { week: 13, day: 'Monday', time: '21:00 - 23:00', subject: 'Instrument Flying - Basic Attitudes', category: 'Aviation', description: 'Learn basic instrument flying attitudes and procedures.', duration: 2, phase: 3 },
    { week: 13, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Transformer Implementation', category: 'AI/ML', description: 'Implement transformer architecture from scratch.', duration: 2, phase: 3 },
    { week: 13, day: 'Tuesday', time: '21:00 - 23:00', subject: 'IFR Navigation Systems', category: 'Aviation', description: 'Study IFR navigation systems and procedures.', duration: 2, phase: 3 },
    { week: 13, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Advanced Python - Concurrency', category: 'Programming', description: 'Master concurrent programming in Python.', duration: 2, phase: 3 },
    { week: 13, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Instrument Approaches', category: 'Aviation', description: 'Learn various instrument approach procedures.', duration: 2, phase: 3 },
    { week: 13, day: 'Thursday', time: '08:00 - 10:00', subject: 'BERT and GPT Models', category: 'AI/ML', description: 'Deep dive into BERT and GPT model architectures.', duration: 2, phase: 3 },
    { week: 13, day: 'Thursday', time: '21:00 - 23:00', subject: 'IFR Flight Training', category: 'Aviation', description: 'Begin instrument flight training with instructor.', duration: 2, phase: 3 },
    { week: 13, day: 'Friday', time: '08:00 - 10:00', subject: 'Distributed Systems', category: 'Programming', description: 'Design and implement distributed systems.', duration: 2, phase: 3 },
    { week: 13, day: 'Friday', time: '21:00 - 23:00', subject: 'IFR Procedures Practice', category: 'Aviation', description: 'Practice IFR procedures and emergency situations.', duration: 2, phase: 3 },
    { week: 13, day: 'Saturday', time: '10:00 - 13:00', subject: 'Custom LLM Training', category: 'AI/ML', description: 'Train a custom language model for specific domain.', duration: 3, phase: 3 },
    { week: 13, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 13, day: 'Saturday', time: '16:00 - 20:00', subject: 'High-Performance Computing', category: 'Programming', description: 'Implement high-performance computing solutions.', duration: 4, phase: 3 },
    { week: 13, day: 'Sunday', time: '10:00 - 13:00', subject: 'IFR Cross Country Flight', category: 'Aviation', description: 'IFR cross-country flight with instructor.', duration: 3, phase: 3 },
    { week: 13, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 13, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 13 progress and plan week 14.', duration: 4, phase: 3 },

    // Week 14: October 20 - October 26, 2025
    { week: 14, day: 'Monday', time: '08:00 - 10:00', subject: 'LLM Fine-tuning Techniques', category: 'AI/ML', description: 'Advanced fine-tuning techniques for large language models.', duration: 2, phase: 3 },
    { week: 14, day: 'Monday', time: '21:00 - 23:00', subject: 'Precision Instrument Approaches', category: 'Aviation', description: 'Practice precision instrument approaches (ILS, LPV).', duration: 2, phase: 3 },
    { week: 14, day: 'Tuesday', time: '08:00 - 10:00', subject: 'RLHF Implementation', category: 'AI/ML', description: 'Implement Reinforcement Learning from Human Feedback.', duration: 2, phase: 3 },
    { week: 14, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Non-Precision Approaches', category: 'Aviation', description: 'Practice non-precision approaches (VOR, NDB, GPS).', duration: 2, phase: 3 },
    { week: 14, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Machine Learning Engineering', category: 'Programming', description: 'Advanced ML engineering practices and patterns.', duration: 2, phase: 3 },
    { week: 14, day: 'Wednesday', time: '21:00 - 23:00', subject: 'IFR Emergency Procedures', category: 'Aviation', description: 'Practice IFR emergency procedures and decision making.', duration: 2, phase: 3 },
    { week: 14, day: 'Thursday', time: '08:00 - 10:00', subject: 'Prompt Engineering Advanced', category: 'AI/ML', description: 'Advanced prompt engineering for complex tasks.', duration: 2, phase: 3 },
    { week: 14, day: 'Thursday', time: '21:00 - 23:00', subject: 'Instrument Rating Mock Checkride', category: 'Aviation', description: 'Mock instrument rating checkride preparation.', duration: 2, phase: 3 },
    { week: 14, day: 'Friday', time: '08:00 - 10:00', subject: 'AI System Architecture', category: 'Programming', description: 'Design scalable AI system architectures.', duration: 2, phase: 3 },
    { week: 14, day: 'Friday', time: '21:00 - 23:00', subject: 'IFR Checkride Preparation', category: 'Aviation', description: 'Final preparation for instrument rating checkride.', duration: 2, phase: 3 },
    { week: 14, day: 'Saturday', time: '10:00 - 13:00', subject: 'LLM Application Development', category: 'AI/ML', description: 'Build production-ready LLM applications.', duration: 3, phase: 3 },
    { week: 14, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 14, day: 'Saturday', time: '16:00 - 20:00', subject: 'Real-time Systems', category: 'Programming', description: 'Implement real-time processing systems.', duration: 4, phase: 3 },
    { week: 14, day: 'Sunday', time: '10:00 - 13:00', subject: 'Instrument Rating Checkride', category: 'Aviation', description: 'Official instrument rating checkride.', duration: 3, phase: 3 },
    { week: 14, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 14, day: 'Sunday', time: '16:00 - 20:00', subject: 'IR Celebration & Week Review', category: 'Admin', description: 'Celebrate instrument rating and review week 14.', duration: 4, phase: 3 },

    // Week 15: October 27 - November 2, 2025
    { week: 15, day: 'Monday', time: '08:00 - 10:00', subject: 'Multimodal AI Models', category: 'AI/ML', description: 'Introduction to multimodal AI models and their applications.', duration: 2, phase: 3 },
    { week: 15, day: 'Monday', time: '21:00 - 23:00', subject: 'Advanced Flight Simulation', category: 'Aviation', description: 'Advanced flight simulation training for complex scenarios.', duration: 2, phase: 3 },
    { week: 15, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Multimodal Project', category: 'AI/ML', description: 'Build a multimodal AI project (e.g., image-to-text, audio-to-text).', duration: 2, phase: 3 },
    { week: 15, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Advanced Flight Maneuvers', category: 'Aviation', description: 'Practice advanced flight maneuvers and emergency procedures.', duration: 2, phase: 3 },
    { week: 15, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Advanced Python - Data Science', category: 'Programming', description: 'Advanced data science techniques in Python.', duration: 2, phase: 3 },
    { week: 15, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training - Cross Country', category: 'Aviation', description: 'Cross-country flight training with instructor.', duration: 2, phase: 3 },
    { week: 15, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Ethics and Policy', category: 'AI/ML', description: 'Study AI ethics, policy, and societal impact.', duration: 2, phase: 3 },
    { week: 15, day: 'Thursday', time: '21:00 - 23:00', subject: 'Advanced Flight Planning', category: 'Aviation', description: 'Advanced flight planning techniques and decision-making.', duration: 2, phase: 3 },
    { week: 15, day: 'Friday', time: '08:00 - 10:00', subject: 'Data Visualization', category: 'Programming', description: 'Advanced data visualization techniques and tools.', duration: 2, phase: 3 },
    { week: 15, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Training - Night Flying', category: 'Aviation', description: 'Night flying training and practice.', duration: 2, phase: 3 },
    { week: 15, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI in Healthcare', category: 'AI/ML', description: 'Introduction to AI applications in healthcare.', duration: 3, phase: 3 },
    { week: 15, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 15, day: 'Saturday', time: '16:00 - 20:00', subject: 'Healthcare AI Project', category: 'Programming', description: 'Build a simple AI application for healthcare.', duration: 4, phase: 3 },
    { week: 15, day: 'Sunday', time: '10:00 - 13:00', subject: 'Advanced Flight Simulation Review', category: 'Aviation', description: 'Review and practice advanced flight simulation scenarios.', duration: 3, phase: 3 },
    { week: 15, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 15, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 15 progress and plan week 16.', duration: 4, phase: 3 },

    // Week 16: November 3 - November 9, 2025
    { week: 16, day: 'Monday', time: '08:00 - 10:00', subject: 'Vector Databases & RAG', category: 'AI/ML', description: 'Advanced vector databases and RAG system implementation.', duration: 2, phase: 3 },
    { week: 16, day: 'Monday', time: '21:00 - 23:00', subject: 'Commercial Pilot Theory', category: 'Aviation', description: 'Begin commercial pilot ground school theory.', duration: 2, phase: 3 },
    { week: 16, day: 'Tuesday', time: '08:00 - 10:00', subject: 'RAG System Development', category: 'AI/ML', description: 'Build a production-ready RAG system for enterprise use.', duration: 2, phase: 3 },
    { week: 16, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Commercial Maneuvers Prep', category: 'Aviation', description: 'Prepare for commercial pilot maneuvers training.', duration: 2, phase: 3 },
    { week: 16, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Quantum Computing Intro', category: 'Programming', description: 'Introduction to quantum computing concepts.', duration: 2, phase: 3 },
    { week: 16, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Complex Aircraft Systems', category: 'Aviation', description: 'Study complex aircraft systems and operations.', duration: 2, phase: 3 },
    { week: 16, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Agent Development', category: 'AI/ML', description: 'Build autonomous AI agents for specific tasks.', duration: 2, phase: 3 },
    { week: 16, day: 'Thursday', time: '21:00 - 23:00', subject: 'High Performance Aircraft', category: 'Aviation', description: 'Training on high-performance aircraft operations.', duration: 2, phase: 3 },
    { week: 16, day: 'Friday', time: '08:00 - 10:00', subject: 'Blockchain Development', category: 'Programming', description: 'Introduction to blockchain and smart contract development.', duration: 2, phase: 3 },
    { week: 16, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Safety Management', category: 'Aviation', description: 'Study aviation safety management systems.', duration: 2, phase: 3 },
    { week: 16, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Agent Deployment', category: 'AI/ML', description: 'Deploy AI agents to production environments.', duration: 3, phase: 3 },
    { week: 16, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 16, day: 'Saturday', time: '16:00 - 20:00', subject: 'Blockchain Project', category: 'Programming', description: 'Build a blockchain-based application.', duration: 4, phase: 3 },
    { week: 16, day: 'Sunday', time: '10:00 - 13:00', subject: 'Commercial Pilot Flight Training', category: 'Aviation', description: 'Begin commercial pilot flight training.', duration: 3, phase: 3 },
    { week: 16, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 16, day: 'Sunday', time: '16:00 - 20:00', subject: 'Phase 3 Mid-Point Review', category: 'Admin', description: 'Review Phase 3 progress and adjust plans.', duration: 4, phase: 3 },

    // Week 17: November 10 - November 16, 2025
    { week: 17, day: 'Monday', time: '08:00 - 10:00', subject: 'AWS ML Specialty - Course 1', category: 'AI/ML', description: 'Begin AWS Machine Learning Specialty certification.', duration: 2, phase: 3 },
    { week: 17, day: 'Monday', time: '21:00 - 23:00', subject: 'Commercial Maneuvers Training', category: 'Aviation', description: 'Practice commercial pilot maneuvers.', duration: 2, phase: 3 },
    { week: 17, day: 'Tuesday', time: '08:00 - 10:00', subject: 'AWS SageMaker Deep Dive', category: 'AI/ML', description: 'Master AWS SageMaker for ML model development.', duration: 2, phase: 3 },
    { week: 17, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Chandelles and Lazy Eights', category: 'Aviation', description: 'Practice chandelles and lazy eight maneuvers.', duration: 2, phase: 3 },
    { week: 17, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Edge Computing', category: 'Programming', description: 'Implement edge computing solutions.', duration: 2, phase: 3 },
    { week: 17, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Steep Turns and Stalls', category: 'Aviation', description: 'Practice steep turns and power-off stalls.', duration: 2, phase: 3 },
    { week: 17, day: 'Thursday', time: '08:00 - 10:00', subject: 'AWS Lambda for ML', category: 'AI/ML', description: 'Deploy ML models using AWS Lambda.', duration: 2, phase: 3 },
    { week: 17, day: 'Thursday', time: '21:00 - 23:00', subject: 'Emergency Descent and Recovery', category: 'Aviation', description: 'Practice emergency descent and unusual attitude recovery.', duration: 2, phase: 3 },
    { week: 17, day: 'Friday', time: '08:00 - 10:00', subject: 'IoT Development', category: 'Programming', description: 'Build Internet of Things applications.', duration: 2, phase: 3 },
    { week: 17, day: 'Friday', time: '21:00 - 23:00', subject: 'Commercial Cross Country', category: 'Aviation', description: 'Commercial pilot cross-country flight training.', duration: 2, phase: 3 },
    { week: 17, day: 'Saturday', time: '10:00 - 13:00', subject: 'AWS ML Pipeline Project', category: 'AI/ML', description: 'Build end-to-end ML pipeline on AWS.', duration: 3, phase: 3 },
    { week: 17, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 17, day: 'Saturday', time: '16:00 - 20:00', subject: 'IoT Project Implementation', category: 'Programming', description: 'Complete IoT project with cloud integration.', duration: 4, phase: 3 },
    { week: 17, day: 'Sunday', time: '10:00 - 13:00', subject: 'Commercial Solo Practice', category: 'Aviation', description: 'Solo practice of commercial maneuvers.', duration: 3, phase: 3 },
    { week: 17, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 17, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 17 progress and plan week 18.', duration: 4, phase: 3 },

    // Week 18: November 17 - November 23, 2025
    { week: 18, day: 'Monday', time: '08:00 - 10:00', subject: 'Databricks Lakehouse Platform', category: 'AI/ML', description: 'Learn Databricks for unified analytics platform.', duration: 2, phase: 3 },
    { week: 18, day: 'Monday', time: '21:00 - 23:00', subject: 'Commercial Checkride Prep', category: 'Aviation', description: 'Prepare for commercial pilot checkride.', duration: 2, phase: 3 },
    { week: 18, day: 'Tuesday', time: '08:00 - 10:00', subject: 'MLflow and Model Registry', category: 'AI/ML', description: 'Master MLflow for model lifecycle management.', duration: 2, phase: 3 },
    { week: 18, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Commercial Oral Exam Prep', category: 'Aviation', description: 'Prepare for commercial pilot oral examination.', duration: 2, phase: 3 },
    { week: 18, day: 'Wednesday', time: '08:00 - 10:00', subject: 'AR/VR Development', category: 'Programming', description: 'Introduction to augmented and virtual reality development.', duration: 2, phase: 3 },
    { week: 18, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Mock Commercial Checkride', category: 'Aviation', description: 'Mock commercial pilot checkride with instructor.', duration: 2, phase: 3 },
    { week: 18, day: 'Thursday', time: '08:00 - 10:00', subject: 'Delta Lake and Data Versioning', category: 'AI/ML', description: 'Implement data versioning with Delta Lake.', duration: 2, phase: 3 },
    { week: 18, day: 'Thursday', time: '21:00 - 23:00', subject: 'Commercial Flight Test Prep', category: 'Aviation', description: 'Final preparation for commercial flight test.', duration: 2, phase: 3 },
    { week: 18, day: 'Friday', time: '08:00 - 10:00', subject: 'Game Development', category: 'Programming', description: 'Introduction to game development concepts.', duration: 2, phase: 3 },
    { week: 18, day: 'Friday', time: '21:00 - 23:00', subject: 'Commercial Pilot Checkride', category: 'Aviation', description: 'Official commercial pilot checkride.', duration: 2, phase: 3 },
    { week: 18, day: 'Saturday', time: '10:00 - 13:00', subject: 'Databricks ML Project', category: 'AI/ML', description: 'Build ML project using Databricks platform.', duration: 3, phase: 3 },
    { week: 18, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 18, day: 'Saturday', time: '16:00 - 20:00', subject: 'AR/VR Project', category: 'Programming', description: 'Build an AR or VR application.', duration: 4, phase: 3 },
    { week: 18, day: 'Sunday', time: '10:00 - 13:00', subject: 'Commercial Pilot Celebration', category: 'Aviation', description: 'Celebrate commercial pilot achievement.', duration: 3, phase: 3 },
    { week: 18, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 18, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 18 progress and plan week 19.', duration: 4, phase: 3 },

    // Week 19: November 24 - November 30, 2025
    { week: 19, day: 'Monday', time: '08:00 - 10:00', subject: 'Advanced MLOps Practices', category: 'AI/ML', description: 'Advanced MLOps practices and enterprise patterns.', duration: 2, phase: 3 },
    { week: 19, day: 'Monday', time: '21:00 - 23:00', subject: 'CFI Ground School Prep', category: 'Aviation', description: 'Begin certified flight instructor ground school.', duration: 2, phase: 3 },
    { week: 19, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Model Monitoring and Drift', category: 'AI/ML', description: 'Implement model monitoring and drift detection.', duration: 2, phase: 3 },
    { week: 19, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Teaching Fundamentals', category: 'Aviation', description: 'Learn fundamentals of flight instruction.', duration: 2, phase: 3 },
    { week: 19, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Mobile App Development', category: 'Programming', description: 'Build mobile applications with modern frameworks.', duration: 2, phase: 3 },
    { week: 19, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Lesson Planning for CFI', category: 'Aviation', description: 'Learn to create effective flight lesson plans.', duration: 2, phase: 3 },
    { week: 19, day: 'Thursday', time: '08:00 - 10:00', subject: 'A/B Testing for ML', category: 'AI/ML', description: 'Implement A/B testing for ML model evaluation.', duration: 2, phase: 3 },
    { week: 19, day: 'Thursday', time: '21:00 - 23:00', subject: 'CFI Right Seat Training', category: 'Aviation', description: 'Practice flying from right seat for instruction.', duration: 2, phase: 3 },
    { week: 19, day: 'Friday', time: '08:00 - 10:00', subject: 'Progressive Web Apps', category: 'Programming', description: 'Build progressive web applications.', duration: 2, phase: 3 },
    { week: 19, day: 'Friday', time: '21:00 - 23:00', subject: 'CFI Maneuvers Practice', category: 'Aviation', description: 'Practice demonstrating maneuvers for instruction.', duration: 2, phase: 3 },
    { week: 19, day: 'Saturday', time: '10:00 - 13:00', subject: 'ML Experimentation Platform', category: 'AI/ML', description: 'Build platform for ML experimentation.', duration: 3, phase: 3 },
    { week: 19, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 19, day: 'Saturday', time: '16:00 - 20:00', subject: 'Mobile App Project', category: 'Programming', description: 'Complete mobile application project.', duration: 4, phase: 3 },
    { week: 19, day: 'Sunday', time: '10:00 - 13:00', subject: 'CFI Mock Checkride', category: 'Aviation', description: 'Mock CFI checkride preparation.', duration: 3, phase: 3 },
    { week: 19, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 19, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 19 progress and plan week 20.', duration: 4, phase: 3 },

    // Week 20: December 1 - December 7, 2025
    { week: 20, day: 'Monday', time: '08:00 - 10:00', subject: 'AI Solution Architecture', category: 'AI/ML', description: 'Design comprehensive AI solution architectures.', duration: 2, phase: 3 },
    { week: 20, day: 'Monday', time: '21:00 - 23:00', subject: 'CFI Checkride Prep', category: 'Aviation', description: 'Final preparation for CFI checkride.', duration: 2, phase: 3 },
    { week: 20, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Enterprise AI Patterns', category: 'AI/ML', description: 'Study enterprise AI implementation patterns.', duration: 2, phase: 3 },
    { week: 20, day: 'Tuesday', time: '21:00 - 23:00', subject: 'CFI Oral Exam Final Prep', category: 'Aviation', description: 'Final preparation for CFI oral examination.', duration: 2, phase: 3 },
    { week: 20, day: 'Wednesday', time: '08:00 - 10:00', subject: 'API Design and Development', category: 'Programming', description: 'Design and build robust APIs.', duration: 2, phase: 3 },
    { week: 20, day: 'Wednesday', time: '21:00 - 23:00', subject: 'CFI Flight Test Prep', category: 'Aviation', description: 'Final preparation for CFI flight test.', duration: 2, phase: 3 },
    { week: 20, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Governance and Compliance', category: 'AI/ML', description: 'Study AI governance and regulatory compliance.', duration: 2, phase: 3 },
    { week: 20, day: 'Thursday', time: '21:00 - 23:00', subject: 'CFI Checkride', category: 'Aviation', description: 'Official certified flight instructor checkride.', duration: 2, phase: 3 },
    { week: 20, day: 'Friday', time: '08:00 - 10:00', subject: 'Microservices Testing', category: 'Programming', description: 'Advanced testing strategies for microservices.', duration: 2, phase: 3 },
    { week: 20, day: 'Friday', time: '21:00 - 23:00', subject: 'CFI Celebration', category: 'Aviation', description: 'Celebrate CFI achievement and plan instruction career.', duration: 2, phase: 3 },
    { week: 20, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Strategy Consulting', category: 'AI/ML', description: 'Learn AI strategy consulting methodologies.', duration: 3, phase: 3 },
    { week: 20, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 3 },
    { week: 20, day: 'Saturday', time: '16:00 - 20:00', subject: 'API Gateway Project', category: 'Programming', description: 'Build comprehensive API gateway solution.', duration: 4, phase: 3 },
    { week: 20, day: 'Sunday', time: '10:00 - 13:00', subject: 'First Flight Instruction', category: 'Aviation', description: 'Begin career as certified flight instructor.', duration: 3, phase: 3 },
    { week: 20, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 3 },
    { week: 20, day: 'Sunday', time: '16:00 - 20:00', subject: 'Phase 3 Completion Review', category: 'Admin', description: 'Review Phase 3 achievements and plan Phase 4.', duration: 4, phase: 3 },

    // Week 21: December 8 - December 14, 2025
    { week: 21, day: 'Monday', time: '08:00 - 10:00', subject: 'AWS Solutions Architect Study', category: 'AI/ML', description: 'Begin AWS Solutions Architect Professional certification.', duration: 2, phase: 4 },
    { week: 21, day: 'Monday', time: '21:00 - 23:00', subject: 'Flight Instruction Practice', category: 'Aviation', description: 'Continue building flight instruction experience.', duration: 2, phase: 4 },
    { week: 21, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Cloud Architecture Patterns', category: 'AI/ML', description: 'Study advanced cloud architecture patterns.', duration: 2, phase: 4 },
    { week: 21, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Advanced Flight Instruction', category: 'Aviation', description: 'Advanced flight instruction techniques.', duration: 2, phase: 4 },
    { week: 21, day: 'Wednesday', time: '08:00 - 10:00', subject: 'System Design Principles', category: 'Programming', description: 'Master system design principles for large scale.', duration: 2, phase: 4 },
    { week: 21, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Multi-Engine Instruction Prep', category: 'Aviation', description: 'Prepare for multi-engine instruction rating.', duration: 2, phase: 4 },
    { week: 21, day: 'Thursday', time: '08:00 - 10:00', subject: 'Data-Intensive Applications', category: 'AI/ML', description: 'Study designing data-intensive applications.', duration: 2, phase: 4 },
    { week: 21, day: 'Thursday', time: '21:00 - 23:00', subject: 'Instrument Instruction Prep', category: 'Aviation', description: 'Prepare for instrument instruction rating.', duration: 2, phase: 4 },
    { week: 21, day: 'Friday', time: '08:00 - 10:00', subject: 'Performance Engineering', category: 'Programming', description: 'Advanced performance engineering techniques.', duration: 2, phase: 4 },
    { week: 21, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Planning', category: 'Aviation', description: 'Plan aviation business or career advancement.', duration: 2, phase: 4 },
    { week: 21, day: 'Saturday', time: '10:00 - 13:00', subject: 'AWS Architecture Project', category: 'AI/ML', description: 'Design comprehensive AWS architecture solution.', duration: 3, phase: 4 },
    { week: 21, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 21, day: 'Saturday', time: '16:00 - 20:00', subject: 'Distributed Systems Project', category: 'Programming', description: 'Build large-scale distributed system.', duration: 4, phase: 4 },
    { week: 21, day: 'Sunday', time: '10:00 - 13:00', subject: 'Flight School Operations', category: 'Aviation', description: 'Learn flight school operations and management.', duration: 3, phase: 4 },
    { week: 21, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 21, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 21 progress and plan week 22.', duration: 4, phase: 4 },

    // Week 22: December 15 - December 21, 2025
    { week: 22, day: 'Monday', time: '08:00 - 10:00', subject: 'MIT AI Strategy Course', category: 'AI/ML', description: 'Begin MIT AI strategy and leadership course.', duration: 2, phase: 4 },
    { week: 22, day: 'Monday', time: '21:00 - 23:00', subject: 'CFII Training Prep', category: 'Aviation', description: 'Prepare for certified flight instructor instrument rating.', duration: 2, phase: 4 },
    { week: 22, day: 'Tuesday', time: '08:00 - 10:00', subject: 'AI Business Strategy', category: 'AI/ML', description: 'Study AI business strategy and transformation.', duration: 2, phase: 4 },
    { week: 22, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Instrument Instruction Theory', category: 'Aviation', description: 'Study instrument instruction theory and methods.', duration: 2, phase: 4 },
    { week: 22, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Leadership in Tech', category: 'Programming', description: 'Develop technical leadership skills.', duration: 2, phase: 4 },
    { week: 22, day: 'Wednesday', time: '21:00 - 23:00', subject: 'CFII Right Seat Practice', category: 'Aviation', description: 'Practice instrument instruction from right seat.', duration: 2, phase: 4 },
    { week: 22, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Ethics in Business', category: 'AI/ML', description: 'Study AI ethics in business applications.', duration: 2, phase: 4 },
    { week: 22, day: 'Thursday', time: '21:00 - 23:00', subject: 'IFR Teaching Techniques', category: 'Aviation', description: 'Learn effective IFR teaching techniques.', duration: 2, phase: 4 },
    { week: 22, day: 'Friday', time: '08:00 - 10:00', subject: 'Product Management', category: 'Programming', description: 'Learn technical product management skills.', duration: 2, phase: 4 },
    { week: 22, day: 'Friday', time: '21:00 - 23:00', subject: 'CFII Mock Checkride', category: 'Aviation', description: 'Mock CFII checkride preparation.', duration: 2, phase: 4 },
    { week: 22, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Strategy Case Studies', category: 'AI/ML', description: 'Analyze AI strategy case studies.', duration: 3, phase: 4 },
    { week: 22, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 22, day: 'Saturday', time: '16:00 - 20:00', subject: 'Product Strategy Project', category: 'Programming', description: 'Develop comprehensive product strategy.', duration: 4, phase: 4 },
    { week: 22, day: 'Sunday', time: '10:00 - 13:00', subject: 'CFII Checkride', category: 'Aviation', description: 'Official CFII checkride examination.', duration: 3, phase: 4 },
    { week: 22, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 22, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 22 progress and plan week 23.', duration: 4, phase: 4 },

    // Week 23: December 22 - December 28, 2025
    { week: 23, day: 'Monday', time: '08:00 - 10:00', subject: 'AI Transformation Leadership', category: 'AI/ML', description: 'Learn to lead AI transformation initiatives.', duration: 2, phase: 4 },
    { week: 23, day: 'Monday', time: '21:00 - 23:00', subject: 'Advanced Flight Instruction', category: 'Aviation', description: 'Advanced flight instruction with CFII rating.', duration: 2, phase: 4 },
    { week: 23, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Change Management', category: 'AI/ML', description: 'Study change management for AI implementations.', duration: 2, phase: 4 },
    { week: 23, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Complex Aircraft Instruction', category: 'Aviation', description: 'Instruction in complex aircraft systems.', duration: 2, phase: 4 },
    { week: 23, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Agile at Scale', category: 'Programming', description: 'Implement agile methodologies at enterprise scale.', duration: 2, phase: 4 },
    { week: 23, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Multi-Engine Instruction', category: 'Aviation', description: 'Multi-engine aircraft instruction techniques.', duration: 2, phase: 4 },
    { week: 23, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI ROI and Metrics', category: 'AI/ML', description: 'Measure AI return on investment and success metrics.', duration: 2, phase: 4 },
    { week: 23, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Safety Culture', category: 'Aviation', description: 'Build and maintain aviation safety culture.', duration: 2, phase: 4 },
    { week: 23, day: 'Friday', time: '08:00 - 10:00', subject: 'Team Building', category: 'Programming', description: 'Build and lead high-performing technical teams.', duration: 2, phase: 4 },
    { week: 23, day: 'Friday', time: '21:00 - 23:00', subject: 'Flight Training Business', category: 'Aviation', description: 'Develop flight training business strategies.', duration: 2, phase: 4 },
    { week: 23, day: 'Saturday', time: '10:00 - 13:00', subject: 'AI Implementation Plan', category: 'AI/ML', description: 'Create comprehensive AI implementation plan.', duration: 3, phase: 4 },
    { week: 23, day: 'Saturday', time: '13:00 - 16:00', subject: 'Holiday Relaxation', category: 'Personal', description: 'Holiday break and family time.', duration: 3, phase: 4 },
    { week: 23, day: 'Saturday', time: '16:00 - 20:00', subject: 'Team Leadership Project', category: 'Programming', description: 'Lead a complex technical project.', duration: 4, phase: 4 },
    { week: 23, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Career Planning', category: 'Aviation', description: 'Plan long-term aviation career progression.', duration: 3, phase: 4 },
    { week: 23, day: 'Sunday', time: '13:00 - 16:00', subject: 'Holiday Meal Prep', category: 'Personal', description: 'Holiday meal preparation and relaxation.', duration: 3, phase: 4 },
    { week: 23, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 23 progress and plan week 24.', duration: 4, phase: 4 },

    // Week 24: December 29, 2025 - January 4, 2026
    { week: 24, day: 'Monday', time: '08:00 - 10:00', subject: 'Portfolio Finalization', category: 'AI/ML', description: 'Finalize comprehensive AI/ML portfolio.', duration: 2, phase: 4 },
    { week: 24, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Portfolio Review', category: 'Aviation', description: 'Review and document aviation achievements.', duration: 2, phase: 4 },
    { week: 24, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Resume and LinkedIn Update', category: 'Admin', description: 'Update resume and LinkedIn with new skills.', duration: 2, phase: 4 },
    { week: 24, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Aviation Network Building', category: 'Aviation', description: 'Build professional aviation network.', duration: 2, phase: 4 },
    { week: 24, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Interview Preparation', category: 'Admin', description: 'Prepare for AI Solution Architect interviews.', duration: 2, phase: 4 },
    { week: 24, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight School Networking', category: 'Aviation', description: 'Network with flight schools and aviation companies.', duration: 2, phase: 4 },
    { week: 24, day: 'Thursday', time: '08:00 - 10:00', subject: 'Technical Presentation Skills', category: 'Programming', description: 'Develop technical presentation and communication skills.', duration: 2, phase: 4 },
    { week: 24, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Job Applications', category: 'Aviation', description: 'Apply for aviation positions and opportunities.', duration: 2, phase: 4 },
    { week: 24, day: 'Friday', time: '08:00 - 10:00', subject: 'Salary Negotiation', category: 'Admin', description: 'Learn salary negotiation strategies.', duration: 2, phase: 4 },
    { week: 24, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Plan', category: 'Aviation', description: 'Finalize aviation business or career plan.', duration: 2, phase: 4 },
    { week: 24, day: 'Saturday', time: '10:00 - 13:00', subject: 'Job Search Strategy', category: 'Admin', description: 'Develop comprehensive job search strategy.', duration: 3, phase: 4 },
    { week: 24, day: 'Saturday', time: '13:00 - 16:00', subject: 'New Year Relaxation', category: 'Personal', description: 'New Year celebration and relaxation.', duration: 3, phase: 4 },
    { week: 24, day: 'Saturday', time: '16:00 - 20:00', subject: 'Professional Branding', category: 'Admin', description: 'Develop professional brand and online presence.', duration: 4, phase: 4 },
    { week: 24, day: 'Sunday', time: '10:00 - 13:00', subject: 'Year-End Aviation Review', category: 'Aviation', description: 'Review year-end aviation achievements.', duration: 3, phase: 4 },
    { week: 24, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 24, day: 'Sunday', time: '16:00 - 20:00', subject: 'Phase 4 Transition Review', category: 'Admin', description: 'Review Phase 4 progress and plan final weeks.', duration: 4, phase: 4 },

    // Phase 4: AI Solution Architect Focus (Weeks 25-32)
    // Week 25: January 5 - January 11, 2026
    { week: 25, day: 'Monday', time: '08:00 - 10:00', subject: 'Job Applications - AI Roles', category: 'Admin', description: 'Apply for AI Solution Architect positions.', duration: 2, phase: 4 },
    { week: 25, day: 'Monday', time: '21:00 - 23:00', subject: 'Flight Instruction Business', category: 'Aviation', description: 'Develop flight instruction business.', duration: 2, phase: 4 },
    { week: 25, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Technical Interviews Practice', category: 'Admin', description: 'Practice technical interviews for AI roles.', duration: 2, phase: 4 },
    { week: 25, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Advanced Aviation Training', category: 'Aviation', description: 'Continue advanced aviation training.', duration: 2, phase: 4 },
    { week: 25, day: 'Wednesday', time: '08:00 - 10:00', subject: 'System Design Interviews', category: 'Programming', description: 'Practice system design interview questions.', duration: 2, phase: 4 },
    { week: 25, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Consulting Prep', category: 'Aviation', description: 'Prepare for aviation consulting opportunities.', duration: 2, phase: 4 },
    { week: 25, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Case Study Preparation', category: 'AI/ML', description: 'Prepare AI case studies for interviews.', duration: 2, phase: 4 },
    { week: 25, day: 'Thursday', time: '21:00 - 23:00', subject: 'Flight Safety Consulting', category: 'Aviation', description: 'Explore flight safety consulting opportunities.', duration: 2, phase: 4 },
    { week: 25, day: 'Friday', time: '08:00 - 10:00', subject: 'Behavioral Interview Prep', category: 'Admin', description: 'Prepare for behavioral interviews.', duration: 2, phase: 4 },
    { week: 25, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Technology Integration', category: 'Aviation', description: 'Study aviation technology integration.', duration: 2, phase: 4 },
    { week: 25, day: 'Saturday', time: '10:00 - 13:00', subject: 'Mock Interviews', category: 'Admin', description: 'Conduct mock interviews with peers.', duration: 3, phase: 4 },
    { week: 25, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 25, day: 'Saturday', time: '16:00 - 20:00', subject: 'Portfolio Presentation', category: 'Admin', description: 'Create portfolio presentation materials.', duration: 4, phase: 4 },
    { week: 25, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Business Development', category: 'Aviation', description: 'Develop aviation business opportunities.', duration: 3, phase: 4 },
    { week: 25, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 25, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 25 progress and plan week 26.', duration: 4, phase: 4 },

    // Week 26: January 12 - January 18, 2026
    { week: 26, day: 'Monday', time: '08:00 - 10:00', subject: 'Company Research', category: 'Admin', description: 'Research target companies for AI roles.', duration: 2, phase: 4 },
    { week: 26, day: 'Monday', time: '21:00 - 23:00', subject: 'ATP Theory Study', category: 'Aviation', description: 'Begin airline transport pilot theory study.', duration: 2, phase: 4 },
    { week: 26, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Networking Events', category: 'Admin', description: 'Attend AI/ML networking events.', duration: 2, phase: 4 },
    { week: 26, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Airline Operations Study', category: 'Aviation', description: 'Study airline operations and procedures.', duration: 2, phase: 4 },
    { week: 26, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Industry Trend Analysis', category: 'AI/ML', description: 'Analyze current AI/ML industry trends.', duration: 2, phase: 4 },
    { week: 26, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Jet Aircraft Systems', category: 'Aviation', description: 'Study jet aircraft systems and operations.', duration: 2, phase: 4 },
    { week: 26, day: 'Thursday', time: '08:00 - 10:00', subject: 'Competitive Analysis', category: 'Admin', description: 'Analyze competitive landscape for positioning.', duration: 2, phase: 4 },
    { week: 26, day: 'Thursday', time: '21:00 - 23:00', subject: 'CRM and SOP Training', category: 'Aviation', description: 'Crew resource management and standard operating procedures.', duration: 2, phase: 4 },
    { week: 26, day: 'Friday', time: '08:00 - 10:00', subject: 'Personal Branding', category: 'Admin', description: 'Enhance personal brand for job market.', duration: 2, phase: 4 },
    { week: 26, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Weather Advanced', category: 'Aviation', description: 'Advanced aviation weather interpretation.', duration: 2, phase: 4 },
    { week: 26, day: 'Saturday', time: '10:00 - 13:00', subject: 'Thought Leadership', category: 'Admin', description: 'Develop thought leadership content.', duration: 3, phase: 4 },
    { week: 26, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 26, day: 'Saturday', time: '16:00 - 20:00', subject: 'Content Creation', category: 'Admin', description: 'Create technical content for visibility.', duration: 4, phase: 4 },
    { week: 26, day: 'Sunday', time: '10:00 - 13:00', subject: 'Flight Training Business Growth', category: 'Aviation', description: 'Grow flight training business operations.', duration: 3, phase: 4 },
    { week: 26, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 26, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 26 progress and plan week 27.', duration: 4, phase: 4 },

    // Week 27: January 19 - January 25, 2026
    { week: 27, day: 'Monday', time: '08:00 - 10:00', subject: 'Interview Scheduling', category: 'Admin', description: 'Schedule and coordinate job interviews.', duration: 2, phase: 4 },
    { week: 27, day: 'Monday', time: '21:00 - 23:00', subject: 'Type Rating Preparation', category: 'Aviation', description: 'Prepare for aircraft type rating training.', duration: 2, phase: 4 },
    { week: 27, day: 'Tuesday', time: '08:00 - 10:00', subject: 'First Round Interviews', category: 'Admin', description: 'Participate in first round interviews.', duration: 2, phase: 4 },
    { week: 27, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Simulator Training Prep', category: 'Aviation', description: 'Prepare for flight simulator training.', duration: 2, phase: 4 },
    { week: 27, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Technical Assessments', category: 'Programming', description: 'Complete technical assessments for roles.', duration: 2, phase: 4 },
    { week: 27, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Airline Interview Prep', category: 'Aviation', description: 'Prepare for airline pilot interviews.', duration: 2, phase: 4 },
    { week: 27, day: 'Thursday', time: '08:00 - 10:00', subject: 'AI Architecture Interviews', category: 'AI/ML', description: 'Participate in AI architecture interviews.', duration: 2, phase: 4 },
    { week: 27, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Medical Prep', category: 'Aviation', description: 'Prepare for aviation medical examinations.', duration: 2, phase: 4 },
    { week: 27, day: 'Friday', time: '08:00 - 10:00', subject: 'Follow-up Communications', category: 'Admin', description: 'Follow up on interview processes.', duration: 2, phase: 4 },
    { week: 27, day: 'Friday', time: '21:00 - 23:00', subject: 'Professional Pilot Prep', category: 'Aviation', description: 'Prepare for professional pilot career.', duration: 2, phase: 4 },
    { week: 27, day: 'Saturday', time: '10:00 - 13:00', subject: 'Offer Evaluation', category: 'Admin', description: 'Evaluate job offers and opportunities.', duration: 3, phase: 4 },
    { week: 27, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 27, day: 'Saturday', time: '16:00 - 20:00', subject: 'Negotiation Preparation', category: 'Admin', description: 'Prepare for salary and offer negotiations.', duration: 4, phase: 4 },
    { week: 27, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Career Decisions', category: 'Aviation', description: 'Make decisions about aviation career path.', duration: 3, phase: 4 },
    { week: 27, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 27, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 27 progress and plan week 28.', duration: 4, phase: 4 },

    // Week 28: January 26 - February 1, 2026
    { week: 28, day: 'Monday', time: '08:00 - 10:00', subject: 'Final Round Interviews', category: 'Admin', description: 'Participate in final round interviews.', duration: 2, phase: 4 },
    { week: 28, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Career Launch', category: 'Aviation', description: 'Launch professional aviation career.', duration: 2, phase: 4 },
    { week: 28, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Executive Presentations', category: 'Admin', description: 'Present to executive teams.', duration: 2, phase: 4 },
    { week: 28, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Flight Operations Management', category: 'Aviation', description: 'Learn flight operations management.', duration: 2, phase: 4 },
    { week: 28, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Reference Checks', category: 'Admin', description: 'Coordinate reference checks.', duration: 2, phase: 4 },
    { week: 28, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Safety Leadership', category: 'Aviation', description: 'Develop aviation safety leadership skills.', duration: 2, phase: 4 },
    { week: 28, day: 'Thursday', time: '08:00 - 10:00', subject: 'Offer Negotiations', category: 'Admin', description: 'Negotiate job offers and terms.', duration: 2, phase: 4 },
    { week: 28, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Training Management', category: 'Aviation', description: 'Learn aviation training management.', duration: 2, phase: 4 },
    { week: 28, day: 'Friday', time: '08:00 - 10:00', subject: 'Decision Making', category: 'Admin', description: 'Make final career decisions.', duration: 2, phase: 4 },
    { week: 28, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Strategy', category: 'Aviation', description: 'Develop aviation business strategy.', duration: 2, phase: 4 },
    { week: 28, day: 'Saturday', time: '10:00 - 13:00', subject: 'Contract Review', category: 'Admin', description: 'Review employment contracts.', duration: 3, phase: 4 },
    { week: 28, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 28, day: 'Saturday', time: '16:00 - 20:00', subject: 'Transition Planning', category: 'Admin', description: 'Plan transition to new role.', duration: 4, phase: 4 },
    { week: 28, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Network Expansion', category: 'Aviation', description: 'Expand professional aviation network.', duration: 3, phase: 4 },
    { week: 28, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 28, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 28 progress and plan week 29.', duration: 4, phase: 4 },

    // Week 29: February 2 - February 8, 2026
    { week: 29, day: 'Monday', time: '08:00 - 10:00', subject: 'Job Acceptance', category: 'Admin', description: 'Accept job offer and finalize terms.', duration: 2, phase: 4 },
    { week: 29, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Mentorship', category: 'Aviation', description: 'Begin aviation mentorship programs.', duration: 2, phase: 4 },
    { week: 29, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Onboarding Preparation', category: 'Admin', description: 'Prepare for new role onboarding.', duration: 2, phase: 4 },
    { week: 29, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Aviation Leadership Development', category: 'Aviation', description: 'Develop aviation leadership skills.', duration: 2, phase: 4 },
    { week: 29, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Technology Stack Learning', category: 'Programming', description: 'Learn new company technology stack.', duration: 2, phase: 4 },
    { week: 29, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Training Expansion', category: 'Aviation', description: 'Expand flight training capabilities.', duration: 2, phase: 4 },
    { week: 29, day: 'Thursday', time: '08:00 - 10:00', subject: 'Team Introduction', category: 'Admin', description: 'Introduce yourself to new team.', duration: 2, phase: 4 },
    { week: 29, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Consulting Growth', category: 'Aviation', description: 'Grow aviation consulting practice.', duration: 2, phase: 4 },
    { week: 29, day: 'Friday', time: '08:00 - 10:00', subject: 'Company Culture Learning', category: 'Admin', description: 'Learn company culture and values.', duration: 2, phase: 4 },
    { week: 29, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Innovation Projects', category: 'Aviation', description: 'Work on aviation innovation projects.', duration: 2, phase: 4 },
    { week: 29, day: 'Saturday', time: '10:00 - 13:00', subject: 'First Week Reflection', category: 'Admin', description: 'Reflect on first week in new role.', duration: 3, phase: 4 },
    { week: 29, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 29, day: 'Saturday', time: '16:00 - 20:00', subject: 'Skill Gap Analysis', category: 'Programming', description: 'Analyze skill gaps for new role.', duration: 4, phase: 4 },
    { week: 29, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Business Optimization', category: 'Aviation', description: 'Optimize aviation business operations.', duration: 3, phase: 4 },
    { week: 29, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 29, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 29 progress and plan week 30.', duration: 4, phase: 4 },

    // Week 30: February 9 - February 15, 2026
    { week: 30, day: 'Monday', time: '08:00 - 10:00', subject: 'Project Assignment', category: 'AI/ML', description: 'Receive and analyze first project assignment.', duration: 2, phase: 4 },
    { week: 30, day: 'Monday', time: '21:00 - 23:00', subject: 'Advanced Flight Training', category: 'Aviation', description: 'Continue advanced flight training.', duration: 2, phase: 4 },
    { week: 30, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Project Planning', category: 'Admin', description: 'Plan and scope initial project.', duration: 2, phase: 4 },
    { week: 30, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Flight Simulation Training', category: 'Aviation', description: 'Advanced flight simulation training.', duration: 2, phase: 4 },
    { week: 30, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Data Engineering', category: 'Programming', description: 'Learn data engineering principles.', duration: 2, phase: 4 },
    { week: 30, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Flight Instructor Training', category: 'Aviation', description: 'Advanced flight instructor training.', duration: 2, phase: 4 },
    { week: 30, day: 'Thursday', time: '08:00 - 10:00', subject: 'Project Management', category: 'Admin', description: 'Study project management methodologies.', duration: 2, phase: 4 },
    { week: 30, day: 'Thursday', time: '21:00 - 23:00', subject: 'Flight Operations Coordination', category: 'Aviation', description: 'Learn flight operations coordination.', duration: 2, phase: 4 },
    { week: 30, day: 'Friday', time: '08:00 - 10:00', subject: 'Machine Learning in Practice', category: 'AI/ML', description: 'Apply machine learning in real-world scenarios.', duration: 2, phase: 4 },
    { week: 30, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Development', category: 'Aviation', description: 'Develop aviation business strategies.', duration: 2, phase: 4 },
    { week: 30, day: 'Saturday', time: '10:00 - 13:00', subject: 'Project Kickoff Meeting', category: 'Admin', description: 'Attend kickoff meeting for new project.', duration: 3, phase: 4 },
    { week: 30, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 30, day: 'Saturday', time: '16:00 - 20:00', subject: 'Project Initial Analysis', category: 'AI/ML', description: 'Begin initial analysis for new project.', duration: 4, phase: 4 },
    { week: 30, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Market Research', category: 'Aviation', description: 'Conduct market research for aviation business.', duration: 3, phase: 4 },
    { week: 30, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 30, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 30 progress and plan week 31.', duration: 4, phase: 4 },

    // Week 31: February 16 - February 22, 2026
    { week: 31, day: 'Monday', time: '08:00 - 10:00', subject: 'Project Deep Dive', category: 'AI/ML', description: 'Deep dive into project requirements and scope.', duration: 2, phase: 4 },
    { week: 31, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Business Negotiation', category: 'Aviation', description: 'Learn aviation business negotiation skills.', duration: 2, phase: 4 },
    { week: 31, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Project Team Meetings', category: 'Admin', description: 'Attend project team meetings and updates.', duration: 2, phase: 4 },
    { week: 31, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Aviation Safety Regulations', category: 'Aviation', description: 'Study aviation safety regulations and standards.', duration: 2, phase: 4 },
    { week: 31, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Machine Learning Model Development', category: 'AI/ML', description: 'Develop and test machine learning models for project.', duration: 2, phase: 4 },
    { week: 31, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Maintenance Overview', category: 'Aviation', description: 'Understand basic aviation maintenance principles.', duration: 2, phase: 4 },
    { week: 31, day: 'Thursday', time: '08:00 - 10:00', subject: 'Project Milestone Review', category: 'Admin', description: 'Review and plan for upcoming project milestones.', duration: 2, phase: 4 },
    { week: 31, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Insurance & Risk Management', category: 'Aviation', description: 'Learn about aviation insurance and risk management.', duration: 2, phase: 4 },
    { week: 31, day: 'Friday', time: '08:00 - 10:00', subject: 'Machine Learning in Aviation', category: 'AI/ML', description: 'Explore applications of machine learning in aviation.', duration: 2, phase: 4 },
    { week: 31, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Operations', category: 'Aviation', description: 'Study aviation business operations and management.', duration: 2, phase: 4 },
    { week: 31, day: 'Saturday', time: '10:00 - 13:00', subject: 'Project Team Building', category: 'Admin', description: 'Focus on team building and communication for the project.', duration: 3, phase: 4 },
    { week: 31, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 31, day: 'Saturday', time: '16:00 - 20:00', subject: 'Project Technical Work', category: 'AI/ML', description: 'Continue technical work on the project.', duration: 4, phase: 4 },
    { week: 31, day: 'Sunday', time: '10:00 - 13:00', subject: 'Aviation Market Trends', category: 'Aviation', description: 'Analyze current aviation market trends.', duration: 3, phase: 4 },
    { week: 31, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 31, day: 'Sunday', time: '16:00 - 20:00', subject: 'Weekly Review & Planning', category: 'Admin', description: 'Review week 31 progress and plan week 32.', duration: 4, phase: 4 },
    // Week 32: February 23 - February 29, 2026
    { week: 32, day: 'Monday', time: '08:00 - 10:00', subject: 'Project Finalization', category: 'AI/ML', description: 'Finalize project deliverables and documentation.', duration: 2, phase: 4 },
    { week: 32, day: 'Monday', time: '21:00 - 23:00', subject: 'Aviation Business Networking', category: 'Aviation', description: 'Attend aviation business networking events.', duration: 2, phase: 4 },
    { week: 32, day: 'Tuesday', time: '08:00 - 10:00', subject: 'Project Handoff & Documentation', category: 'Admin', description: 'Prepare for project handoff and complete final documentation.', duration: 2, phase: 4 },
    { week: 32, day: 'Tuesday', time: '21:00 - 23:00', subject: 'Aviation Business Law', category: 'Aviation', description: 'Study aviation business law and regulations.', duration: 2, phase: 4 },
    { week: 32, day: 'Wednesday', time: '08:00 - 10:00', subject: 'Project Review & Wrap-up', category: 'AI/ML', description: 'Review project deliverables and wrap up project.', duration: 2, phase: 4 },
    { week: 32, day: 'Wednesday', time: '21:00 - 23:00', subject: 'Aviation Business Taxation', category: 'Aviation', description: 'Learn about aviation business taxation.', duration: 2, phase: 4 },
    { week: 32, day: 'Thursday', time: '08:00 - 10:00', subject: 'Project Final Touches', category: 'AI/ML', description: 'Make final touches on project deliverables.', duration: 2, phase: 4 },
    { week: 32, day: 'Thursday', time: '21:00 - 23:00', subject: 'Aviation Business Insurance', category: 'Aviation', description: 'Understand aviation business insurance needs.', duration: 2, phase: 4 },
    { week: 32, day: 'Friday', time: '08:00 - 10:00', subject: 'Project Handoff Preparation', category: 'Admin', description: 'Prepare for project handoff and client meetings.', duration: 2, phase: 4 },
    { week: 32, day: 'Friday', time: '21:00 - 23:00', subject: 'Aviation Business Operations Review', category: 'Aviation', description: 'Review aviation business operations and management.', duration: 2, phase: 4 },
    { week: 32, day: 'Saturday', time: '10:00 - 13:00', subject: 'Project Handoff & Client Meetings', category: 'Admin', description: 'Attend project handoff meetings with clients.', duration: 3, phase: 4 },
    { week: 32, day: 'Saturday', time: '13:00 - 16:00', subject: 'Relaxation & Lunch', category: 'Personal', description: 'Break for lunch and personal time.', duration: 3, phase: 4 },
    { week: 32, day: 'Saturday', time: '16:00 - 20:00', subject: 'Final Project Review', category: 'AI/ML', description: 'Conduct a final review of the project and its outcomes.', duration: 4, phase: 4 },
    { week: 32, day: 'Sunday', time: '10:00 - 13:00', subject: 'Reflection & Planning', category: 'Admin', description: 'Reflect on the project and plan for future endeavors.', duration: 3, phase: 4 },
    { week: 32, day: 'Sunday', time: '13:00 - 16:00', subject: 'Relaxation & Meal Prep', category: 'Personal', description: 'Time for relaxation and meal preparation.', duration: 3, phase: 4 },
    { week: 32, day: 'Sunday', time: '16:00 - 20:00', subject: 'Final Touches & Documentation', category: 'Admin', description: 'Make final touches on project documentation and prepare for showcase.', duration: 4, phase: 4 }

];

async function populateSchedule() {
    try {
        console.log('Starting to populate schedule data...');
        
        // Clear existing data
        const { error: deleteError } = await supabase
            .from('schedule_data')
            .delete()
            .neq('id', '');
        
        if (deleteError) {
            console.warn('Warning clearing existing data:', deleteError);
        }
        
        // Insert new data in batches
        const batchSize = 100;
        for (let i = 0; i < scheduleData.length; i += batchSize) {
            const batch = scheduleData.slice(i, i + batchSize).map((item, index) => ({
                ...item,
                id: `schedule_${item.week}_${item.day}_${item.time}_${i + index}`.replace(/[^a-zA-Z0-9_]/g, '_')
            }));
            
            const { error } = await supabase
                .from('schedule_data')
                .insert(batch);
            
            if (error) {
                console.error('Error inserting batch:', error);
                throw error;
            }
            
            console.log(`Inserted batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(scheduleData.length/batchSize)}`);
        }
        
        console.log('Schedule data populated successfully!');
        console.log(`Total items inserted: ${scheduleData.length}`);
        
    } catch (error) {
        console.error('Error populating schedule:', error);
    }
}

// Run the population script
populateSchedule();



