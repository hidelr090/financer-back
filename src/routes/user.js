import {auth} from '../middlewares/auth.js';
import express from 'express';

import {makeUserController} from "../factories/controllers/user-controller-factory.js";

const controller = makeUserController();
const router = express.Router();

router.post('/create', controller.create);
router.post('/update/:id', auth, controller.update);
router.post('/delete/:id', auth, controller.delete);

export default router;

