import {makeMovementService} from "../services/movement-service-factory.js";
import {MovementController} from "../../controllers/movement-controller.js";

export const makeMovementController = () => {
    const movementService = makeMovementService();

    return new MovementController(movementService);
}