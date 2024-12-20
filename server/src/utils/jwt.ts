import dotenv from 'dotenv';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

dotenv.config(); 
// Secret key from environment variables
const SECRET_KEY: Secret = process.env.JWT_SECRET || 'defaultsecret'; 

// Define the payload type for better type safety
export interface TokenPayload {
    user_id: string;
    email: string;
    [key: string]: any; // Allow additional fields if needed
}

// Generate a JWT
export const generateToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); 
};

// Verify a JWT
export const verifyToken = (token: string): JwtPayload | null => {
    try {
        return jwt.verify(token, SECRET_KEY) as JwtPayload; // Returns the decoded payload if valid
    } catch (err) {
        return null; // Return null if verification fails
    }
};
