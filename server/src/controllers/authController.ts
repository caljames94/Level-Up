import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/users.js';

dotenv.config();

// Type for user input during signup
interface SignupInput {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profile_picture_url?: string;
}

// Type for login input
interface LoginInput {
    email: string;
    password: string;
}

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { first_name, last_name, email, password } = req.body;

        console.log('Signup request received:', req.body); // Log request data

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Password hashed successfully:', hashedPassword);

        // Attempt to create the user
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password_hash: hashedPassword,
        });

        console.log('User successfully created in database:', newUser.toJSON());
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error during signup:', error); // Log errors
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body as LoginInput;

        // Log incoming data
        console.log('Received data for login:', { email, password });

        // Find user by email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            console.log('User not found for email:', email);
            res.status(404).json({ error: 'User not found' });
            return;
        }

        console.log('Fetched user data:', user.toJSON());

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            console.log('Password mismatch for email:', email);
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Generate a JWT
        const token = jwt.sign(
            { user_id: user.getDataValue('user_id'), email: user.getDataValue('email') },
            process.env.JWT_SECRET || 'defaultsecret', // Fallback for JWT_SECRET
            { expiresIn: '1h' }
        );

        console.log('Generated JWT for user:', { email, token });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
