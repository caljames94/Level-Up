import { Booking } from "../models/bookings.js";

async function seedBookings() {
    try {
        const existingCount = await Booking.count(); // Count existing rows
        if (existingCount > 0) {
            console.log("Seed data already exists. Skipping...");
            return;
        }

        await Booking.bulkCreate([
            {
                user_id: 1,
                class_id: 1,
                booking_date: new Date(),
            },
            {
                user_id: 2,
                class_id: 2,
                booking_date: new Date(),
            },
            {
                user_id: 3,
                class_id: 3,
                booking_date: new Date(),
            },
            {
                user_id: 4,
                class_id: 1,
                booking_date: new Date(),
            },
            {
                user_id: 1,
                class_id: 7,
                booking_date: new Date(),
            },
            {
                user_id: 1,
                class_id: 11,
                booking_date: new Date(),
            }
        ]);

        console.log("Bookings have been seeded successfully.");
    } catch (err) {
        console.error("Failed to seed bookings:", err);
    }
}

export default seedBookings;