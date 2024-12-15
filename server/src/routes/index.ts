import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './authRoutes.js'; // Import the auth routes

const router = Router();

// Use API routes
router.use("/api", apiRoutes);

// Use Auth routes
router.use("/api", authRoutes); // Add this line to expose /api/signup and /api/login

export default router;
