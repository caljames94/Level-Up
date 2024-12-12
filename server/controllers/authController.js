const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Signup controller
const signup = async (req, res) => {
    try {
        const { first_name, last_name, email, password, date_of_birth, profile_picture_url } = req.body;

        // Log incoming data
        console.log('Received data for signup:', {
            first_name,
            last_name,
            email,
            password,
            date_of_birth,
            profile_picture_url,
        });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert into database
        const query = `
            INSERT INTO users 
            (first_name, last_name, email, password_hash, date_of_birth, profile_picture_url) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        
        const values = [first_name, last_name, email, hashedPassword, date_of_birth, profile_picture_url];
        
        console.log('Executing query for signup:', { query, values });

        const result = await db.query(query, values);

        // Log inserted data
        console.log('Inserted user data:', result.rows[0]);

        res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Log incoming data
        console.log('Received data for login:', { email, password });

        // Check if the user exists
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await db.query(query, [email]);

        if (result.rows.length === 0) {
            console.log('User not found for email:', email);
            return res.status(404).json({ error: 'User not found' });
        }

        const user = result.rows[0];
        console.log('Fetched user data:', user);

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            console.log('Password mismatch for email:', email);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT
        const token = jwt.sign(
            { user_id: user.user_id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log('Generated JWT for user:', { email, token });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { signup, login };
