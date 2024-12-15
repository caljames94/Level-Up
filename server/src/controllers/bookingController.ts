import { Request, Response, NextFunction } from 'express';
import { Booking, User, Class } from '../models/index.js';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const { user_id, class_id } = req.body;
        const booking = await Booking.create({ 
            user_id, 
            class_id, 
            booking_date: new Date() 
        });
        res.status(201).json(booking);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to create a booking'});
    }
};

export const getBookingsByUserId = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const bookings = await Booking.findAll({ 
            where: { user_id }, 
            include: [{ model: Class }] 
        });
        res.status(200).json(bookings);
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to retrieve bookings'});
    }
};

export const deleteBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { booking_id } = req.params;
        const booking = await Booking.findByPk(booking_id);
        if (!booking) {
            res.status(404).json({ message: 'Booking not found' });
            return;
        }
        await booking.destroy();
        res.status(200).send();
    } catch (err: any) {
        res.status(500).json({ error: 'Failed to delete booking' });
    }
}

