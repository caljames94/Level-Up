import express from 'express';
import { createBooking, getBookingsByUserId, deleteBooking } from '../../controllers/bookingController.js';

const router = express.Router();

router.get('/user/:user_id', getBookingsByUserId);
router.post('/', createBooking);
router.delete('/:booking_id', deleteBooking);

export { router as bookingRouter };