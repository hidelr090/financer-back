import express from "express";

import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import spreadsheetRouter from './routes/spreadsheet.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/spreadsheet', spreadsheetRouter);

export default router;