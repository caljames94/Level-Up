import { Router } from 'express';
import apiRoutes from './api/index-api-routes.js';
import authRoutes from './authRoutes.js'; // Import the auth routes

const router = Router();


// Use Auth routes
router.use("/api", apiRoutes); // Add this line to expose /api/signup and /api/login

// router.use("/api/auth", authRoutes); // Commenting out because we've already defined and added the auth routes in server.ts which this file links to

export default router;

// 
