DROP DATABASE IF EXISTS level_up_db;
CREATE DATABASE level_up_db;

\c level_up_db;

-- Drop tables if they exist (reverse dependency order)
DROP TABLE IF EXISTS Bookings CASCADE;
DROP TABLE IF EXISTS Classes CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

-- Create Users table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date_of_birth DATE DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profile_picture_url VARCHAR(255)
);

-- Create Classes table
CREATE TABLE Classes (
    class_id SERIAL PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL,
    difficulty VARCHAR(100) NOT NULL,
    description TEXT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    location VARCHAR(100),
    capacity INT NOT NULL,
    current_bookings INT DEFAULT 0,
    CONSTRAINT chk_capacity CHECK (capacity >= 0 AND current_bookings <= capacity),
    CONSTRAINT chk_time_range CHECK (start_time < end_time)
);

-- Create Bookings table
CREATE TABLE Bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    class_id INT NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES Classes(class_id) ON DELETE CASCADE,
    UNIQUE (user_id, class_id)
);

-- Add indexes for performance optimization
CREATE INDEX idx_user_email ON Users(email);
CREATE INDEX idx_booking_class_id ON Bookings(class_id);
