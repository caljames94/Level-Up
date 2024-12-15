-- Insert data into Users table
INSERT INTO Users (user_id,first_name, last_name, email, password_hash, profile_picture_url)
VALUES 
(1, 'Alice', 'Smith', 'alice.smith@example.com', 'hashedpassword1', 'https://example.com/alice.jpg'),
(2, 'Bob', 'Johnson', 'bob.johnson@example.com', 'hashedpassword2', NULL),
(3, 'Charlie', 'Brown', 'charlie.brown@example.com', 'hashedpassword3', 'https://example.com/charlie.jpg');
(4,'David', 'Williams', 'david.williams@example.com', 'hashedpassword4', 'https://example.com/david.jpg');

-- Insert data into Classes table
INSERT INTO Classes (class_name, instructor, difficulty, description, start_time, end_time, location, capacity, current_bookings)
VALUES
('Yoga Basics', 'Emma Taylor', 'Easy', 'A beginner yoga class to improve flexibility and reduce stress.', '2024-12-12 09:00:00', '2024-12-12 10:00:00', 'Room 101', 20, 0),
('Advanced Pilates', 'James Wilson', 'Medium', 'Challenging Pilates routines for experienced practitioners.', '2024-12-12 11:00:00', '2024-12-12 12:30:00', 'Room 102', 15, 0),
('Cardio Kickboxing', 'Sophia Davis', 'Hard', 'A high-energy cardio class with kickboxing techniques.', '2024-12-13 18:00:00', '2024-12-13 19:00:00', 'Room 201', 25, 0);

-- Insert data into Bookings table
INSERT INTO Bookings (user_id, class_id, booking_date)
VALUES
(1, 1, '2024-12-10 10:00:00'), -- Alice books Yoga Basics
(2, 2, '2024-12-10 11:00:00'), -- Bob books Advanced Pilates
(3, 3, '2024-12-11 15:00:00'); -- Charlie books Cardio Kickboxing
