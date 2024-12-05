import {decrypt} from "../utils/crypto.js";
import {generateToken} from "../utils/jwt.js";

export class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async authenticate (dto) {
        const { email, password } = dto;

        const user = await this.userRepository.selectByWhere({email});

        if (!user) throw new Error('user not found');

        if(await decrypt(password, user.passwordHash)){
            const token = generateToken({userId: user.id});
            const newDate = new Date(new Date().getTime() + parseInt(process.env.JWT_EXPIRES) * 60 * 60 * 1000);
            await this.userRepository.update(user.id, { token, tokenExpiresAt: newDate });
            return {token};
        }else {
            throw new Error('Password doesn\'t match');
        }
    }
}