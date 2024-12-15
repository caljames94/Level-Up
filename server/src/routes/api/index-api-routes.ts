import { Router } from "express";
import { userRouter } from "./user-routes.js";
import { classRouter } from "./classes-routes.js";
import { bookingRouter } from "./bookings-routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/classes", classRouter);
router.use("/bookings", bookingRouter);

export default router;

// This file is used to combine all our routes into one.
