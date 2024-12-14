import { Router, Request, Response, RequestHandler } from 'express';
import sequelize from '../config/connection.js';
import { QueryTypes } from 'sequelize';

const router: Router = Router();

const loginHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { email }: { email: string } = req.body;

    try {
        const result = await sequelize.query(
            'SELECT * FROM users WHERE email = :email',
            {
                replacements: { email }, 
                type: QueryTypes.SELECT,
            }
        );

        if (result.length === 0) {
            res.status(404).json({ message: 'User not found' });
            return; 
        }

        res.json({ user: result[0] });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Database error' });
    }
};

router.post('/login', loginHandler);

export default router;
