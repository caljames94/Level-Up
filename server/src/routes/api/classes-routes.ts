import { Router, Request, Response } from "express";
import { Class } from "../../models/index.js";

export const getClassDetails = async (req: Request, res: Response) => {
  try {
    const classDetails = await Class.findAll();
    res.status(200).json(classDetails);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getClassSummaryDetails = async (req: Request, res: Response) => {
  try {
    const classSummary = await Class.findAll({
      attributes: ["class_name", "instructor", "description", "start_time"],
    });
    res.status(200).json(classSummary);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getClassSummaryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const classSummary = await Class.findOne({
      where: { class_id: id },
      attributes: ["class_name", "instructor", "description", "start_time"],
    });
    if (!classSummary) {
      res.status(404).json({ message: "Class not found" });
    } else {
      res.status(200).json(classSummary);
    }
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


export const getClassesByDifficulty = async (req: Request, res: Response) => {
    try {
      const { difficulty } = req.params;
      console.log(difficulty);
      const classes = await Class.findAll({
        where: { difficulty: difficulty },
      });
      if (classes.length === 0) {
        res.status(404).json({ message: `No ${difficulty} classes found` });
      } else {
        res.status(200).json(classes);
      }
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  };

const router = Router();

router.get("/", getClassDetails);
router.get("/summary", getClassSummaryDetails);
router.get("/difficulty/:difficulty", getClassesByDifficulty);
router.get("/summary/:id", getClassSummaryById);


export { router as classRouter };


