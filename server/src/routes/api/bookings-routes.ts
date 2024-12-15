import express from 'express';
import { createBooking, getBookingsByUserId, deleteBooking } from '../../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/user/:user_id', getBookingsByUserId);
router.delete('/:booking_id', deleteBooking);

export { router as bookingRouter };