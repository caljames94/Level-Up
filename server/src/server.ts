import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import routes from './routes/index.js';
import sequelize from './config/connection.js';
import seedClasses from './seeds/classes.js';
import seedUsers from './seeds/users.js';
import seedBookings from './seeds/bookings.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


// Server Listener
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// Server Listener
sequelize.sync({ alter: true }) // Use { alter: true } to keep data intact
  .then(async () => {
    console.log('Database synchronized.');

    // Run seeds if necessary
    await seedClasses(); // Call your seeding function
    await seedUsers();
    await seedBookings();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });