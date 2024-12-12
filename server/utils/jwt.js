const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

// Secret key from environment variables
const SECRET_KEY = process.env.JWT_SECRET || 'defaultsecret'; // Fallback for development

// Generate a JWT
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Verify a JWT
const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY); // Returns the decoded payload if valid
    } catch (err) {
        return null; // Return null if verification fails
    }
};

module.exports = { generateToken, verifyToken };
