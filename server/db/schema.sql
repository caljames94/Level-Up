CREATE DATABASE level_up_db;

DROP TABLE IF EXISTS users, classes, bookings;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date_of_birth DATE DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profile_picture_url VARCHAR(255)
);


CREATE TABLE Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    description TEXT,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    location VARCHAR(100),
    capacity INT NOT NULL,
    current_bookings INT DEFAULT 0,
    CONSTRAINT chk_capacity CHECK (capacity >= 0 AND current_bookings <= capacity)
);

CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    class_id INT NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES Classes(class_id) ON DELETE CASCADE,
    UNIQUE (user_id, class_id) -- Ensures a user can only book a class once
);

-- Optional do we need this table?

-- CREATE TABLE Profiles (
--     profile_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL UNIQUE,
--     bio TEXT,
--     preferences JSON,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
-- );

