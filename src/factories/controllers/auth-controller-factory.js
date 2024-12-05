import {makeAuthService} from "../services/auth-service-factory.js";
import {AuthController} from "../../controllers/auth-controller.js";

export const makeAuthController = () => {
    const authService = makeAuthService();
    return new AuthController(authService);
}
