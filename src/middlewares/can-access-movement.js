import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Movement, Category, Spreadsheet } from '../database/models/Movement.js';

export const canAccessMovement = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {body, query, params} = req;
        const userId = req.user?.id;

        if (!userId) {
            return res.status(403).json({ message: 'Acesso negado.' });
        }

        if (req.params.id) {
            const movement = await Movement.findOne({
                where: {
                    id: req.params.id,
                    userId: userId,
                },
                raw: true,
            })

            if (!movement) {
                return res.status(403).json({ message: 'Acesso negado.' });
            }
        }

        req.query.userId = userId;
        req.body.userId = userId;

        next();
    } catch (error) {
        console.error('Erro na autorização de movements:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
};
