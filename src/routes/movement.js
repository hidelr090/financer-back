import { makeMovementController } from "../factories/controllers/movement-controller-factory.js";
import {Router} from "express";
import {canAccessMovement} from "../middlewares/can-access-movement.js";
import {auth} from "../middlewares/auth.js";

const controller = makeMovementController();
const router = new Router();

router.post("/create", auth, controller.create);
router.delete("/delete/:id", auth, canAccessMovement, controller.delete);
router.put("/update/:id", auth, canAccessMovement, controller.update);
router.get("/get-by-id/:id", auth, canAccessMovement, controller.getById);
router.get("/get-all", auth, canAccessMovement, controller.getAll);
router.get("/get-pagination", auth, canAccessMovement, controller.getWithPagination)