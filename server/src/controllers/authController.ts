import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/users.js';
import { generateToken } from '../utils/jwt.js';

dotenv.config();

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { first_name, last_name, email, password, profile_picture_url } = req.body;

    console.log("Signup request received:", req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password_hash: hashedPassword,
      profile_picture_url,
    });

    console.log("User successfully created in database:", newUser.toJSON());

    const token = generateToken({
      user_id: newUser.getDataValue("user_id").toString(),
      email: newUser.getDataValue("email"),
    });

    res.status(201).json({ 
      message: "User registered successfully", 
      user: {
        id: newUser.getDataValue("user_id"),
        email: newUser.getDataValue("email"),
        first_name: newUser.getDataValue("first_name"),
        last_name: newUser.getDataValue("last_name"),
        profile_picture_url: newUser.getDataValue("profile_picture_url"),
        token: token
      }
    });
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
    const token = generateToken({
      user_id: user.getDataValue("user_id").toString(),
      email: user.getDataValue("email"),
    });

    res.status(200).json({ 
      message: "Login successful",
      user: {
        id: user.getDataValue("user_id"),
        email: user.getDataValue("email"),
        first_name: user.getDataValue("first_name"),
        last_name: user.getDataValue("last_name"),
        token: token,
      } 
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

