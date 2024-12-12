import { Router } from "express";
import { userRouter } from "./user-routes.js";

const router = Router();
router.use("/users", userRouter);
export default router;

// This file is used to combine all our routes into one.
