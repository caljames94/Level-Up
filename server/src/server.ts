import express, { Application } from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import routes from './routes/index.js';
import sequelize from './config/connection.js';
import seedClasses from './seeds/classes.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);
app.use('/api/auth', authRoutes);

// Server Listener
sequelize.sync() // Simple sync; tables are only created if they don't exist
  .then(async () => {
    console.log('Database synchronized.');

    // Run seeds if necessary
    await seedClasses(); // Call your seeding function

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
