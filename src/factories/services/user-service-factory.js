import {UserRepository} from "../../database/repositories/user-repository.js";
import {UserService} from "../../services/user-service.js";

export const makeUserService = () => {
    const userRepository = new UserRepository();

    return new UserService(userRepository);
}