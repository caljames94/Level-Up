import { Router } from "express";
import { userRouter } from "./user-routes.js";
import { classRouter } from "./classes-routes.js";

const router = Router();
router.use("/users", userRouter);
router.use("/classes", classRouter);
export default router;

// This file is used to combine all our routes into one.
