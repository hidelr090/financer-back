import {Router} from "express";
import {makeAuthController} from "../factories/controllers/auth-controller-factory.js";

const controller = makeAuthController();
const router = new Router();

router.post('/authenticate', controller.authenticate);

export default router;