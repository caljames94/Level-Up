import { Router, Request, Response } from 'express';
import { Class } from '../../models/classes.js';

export const getClassDetails = async (req: Request, res: Response) => {
    try {
     const classDetails = await Class.findAll();
     res.status(200).json(classDetails);
     } catch (err: any) {
     console.error(err);
     res.status(500).json({ error: err.message });
    };
}

export const getClassSummaryDetails = async (req: Request, res: Response) => {
    try {
        const classSummary = await Class.findAll({
            attributes: ['class_name', 'instructor', 'description', 'start_time'],
        });
        res.status(200).json(classSummary);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message });
    };
}

const router = Router();

router.get("/", getClassDetails);
router.get("/summary", getClassSummaryDetails);

export {router as classRouter};