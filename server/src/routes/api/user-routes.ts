import {Router, Request, Response} from "express";
import { User } from "../../models/index.js";

// GET all users

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message }) 
    };
    
};

//This function will retrieve a single user from the database based on their ID.
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = await User.findByPk(parseInt(req.params.id)); // findByPk is a method provided by Sequelize to find a record by its primary key. req.params.id is the id parameter provided in the URL (e.g. /user/12). ParseInt is converting it to an integer because req.params.id returns a string.
        if (!userId) {
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(userId);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message });
    };
}

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById); 

export {router as userRouter};
