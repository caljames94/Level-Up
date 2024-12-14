import { Router } from 'express';
import { signup, login } from '../controllers/authController.js';

const router: Router = Router();

// Sign Up route
router.post('/signup', signup);

// Login route
router.post('/login', login);

export default router;
