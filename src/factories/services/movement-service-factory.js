import {MovementRepository} from "../../database/repositories/movement-repository.js";
import {MovementService} from "../../services/movement-service.js";

export const makeMovementService = () => {
    const movementRepository = new MovementRepository();

    return new MovementService(movementRepository);
}