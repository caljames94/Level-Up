import { Router, Request, Response } from "express";
import { Classes } from "../../models/index.js";

export const getClassDetails = async (req: Request, res: Response) => {
  try {
    const classDetails = await Classes.findAll();
    res.status(200).json(classDetails);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getClassSummaryDetails = async (req: Request, res: Response) => {
  try {
    const classSummary = await Classes.findAll({
      attributes: ["class_name", "instructor", "description", "start_time"],
    });
    res.status(200).json(classSummary);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getClassesByDifficulty = async (req: Request, res: Response) => {
    try {
      const { difficulty } = req.params;
      console.log(difficulty);
      const classes = await Classes.findAll({
        where: { difficulty: difficulty.toLowerCase() },
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


export { router as classRouter };


// export const getEasyClasses = async (req: Request, res: Response) => {
    //   try {
    //     const easyClasses = await Class.findAll({
    //       where: { difficulty: "easy" },
    //     });
    //     if (easyClasses.length === 0) {
    //       res.status(404).json({ message: "No easy classes found" });
    //     }
    //     res.status(200).json(easyClasses);
    //   } catch (err: any) {
    //     console.error(err);
    //     res.status(500).json({ error: err.message });
    //   }
    // };
    
    // export const getMediumClasses = async (req: Request, res: Response) => {
    //   try {
    //     const mediumClasses = await Class.findAll({
    //       where: { difficulty: "medium" },
    //     });
    //     if (mediumClasses.length === 0) {
    //       res.status(404).json({ message: "No easy classes found" });
    //     }
    //     res.status(200).json(mediumClasses);
    //   } catch (err: any) {
    //     console.error(err);
    //     res.status(500).json({ error: err.message });
    //   }
    // };
    
    // export const getHardClasses = async (req: Request, res: Response) => {
    //   try {
    //     const hardClasses = await Class.findAll({
    //       where: { difficulty: "hard" },
    //     });
    //     if (hardClasses.length === 0) {
    //       res.status(404).json({ message: "No easy classes found" });
    //     }
    //     res.status(200).json(hardClasses);
    //   } catch (err: any) {
    //     console.error(err);
    //     res.status(500).json({ error: err.message });
    //   }
    // };
    
    // export const getExtremeClasses = async (req: Request, res: Response) => {
    //     try {
    //       const extremeClasses = await Class.findAll({
    //         where: { difficulty: "extreme" },
    //       });
    //       if (extremeClasses.length === 0) {
    //         res.status(404).json({ message: "No easy classes found" });
    //       }
    //       res.status(200).json(extremeClasses);
    //     } catch (err: any) {
    //       console.error(err);
    //       res.status(500).json({ error: err.message });
    //     }
    //   };