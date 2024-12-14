import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import routes from './routes/index.js';
import sequelize from './config/connection.js';

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

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
