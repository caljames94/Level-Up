const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables

// Create a new pool using connection details from environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Log a message to confirm the database is connected
pool.on('connect', () => {
    console.log('Connected to the database');
});

// Export the pool for queries
module.exports = pool;

