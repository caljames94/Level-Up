import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/users.js';

dotenv.config();

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { first_name, last_name, email, password, profile_picture_url } = req.body;

    // Log incoming data
    console.log("Signup request received:", req.body);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password_hash: hashedPassword,
      profile_picture_url, // Save profile picture URL
    });

    // Log the newly created user
    console.log("User successfully created in database:", newUser.toJSON());

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // Generate a JWT
    const token = jwt.sign(
      { user_id: user.getDataValue("user_id"), email: user.getDataValue("email") },
      process.env.JWT_SECRET || "defaultsecret", // Fallback for JWT_SECRET
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
