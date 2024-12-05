import {UserRepository} from "../../database/repositories/user-repository.js";
import {AuthService} from "../../services/auth-service.js";

export const makeAuthService = () => {
    const userRepository = new UserRepository();

    return new AuthService(userRepository);
}