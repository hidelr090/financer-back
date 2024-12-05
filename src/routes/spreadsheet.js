import {makeSpreadsheetController} from "../factories/controllers/spreadsheet-controller-factory.js";
import {Router} from "express";
import {canAccessSpreadsheet} from "../middlewares/can-access-spreadsheet.js";
import { auth } from "../middlewares/auth.js";

const controller = makeSpreadsheetController();
const router = new Router();

router.post("/create", auth, controller.create);
router.delete("/delete/:id", auth, canAccessSpreadsheet, controller.delete);
router.put("/update/:id", auth, canAccessSpreadsheet, controller.update);
router.get("/get-by-id/:id", auth, canAccessSpreadsheet, controller.getById);
router.get("/get-all", auth, canAccessSpreadsheet, controller.getAll);
router.get("/get-pagination", auth, canAccessSpreadsheet, controller.getWithPagination)

export default router;