import { Router, Request, Response, RequestHandler } from "express";
import sequelize from "../config/connection.js";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

const router: Router = Router();

const loginHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { email }: { email: string } = req.body;

    try {
        const result = await sequelize.query(
            "SELECT * FROM users WHERE email = :email",
            {
                replacements: { email },
                type: QueryTypes.SELECT,
            }
        );

        if (result.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json({ user: result[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Database error" });
    }
};

// Signup handler
const signupHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { first_name, last_name, email, password, profile_picture_url } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const result = await sequelize.query(
            `INSERT INTO users (first_name, last_name, email, password_hash, profile_picture_url, created_at)
            VALUES (:first_name, :last_name, :email, :password_hash, :profile_picture_url, NOW())
            RETURNING *`,
            {
                replacements: {
                    first_name,
                    last_name,
                    email,
                    password_hash: hashedPassword,
                    profile_picture_url,
                },
                type: QueryTypes.INSERT,
            }
        );

        res.status(201).json({
            message: "User registered successfully",
            user: result[0],
        });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Database error" });
    }
};

router.post("/login", loginHandler);
router.post("/signup", signupHandler);

export default router;
