import {encrypt} from "../utils/crypto.js";

export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async create (dto) {
        const passwordHash = await encrypt(dto.password);
        return await this.userRepository.create({
            id: dto.id,
            name: dto.name,
            email: dto.email,
            phone: dto.phone || null,
            passwordHash,
        });
    }

    async update (userId, dto) {
        if (dto.password) {
            dto.password = encrypt(dto.password);
        }
        return await this.userRepository.update(userId, dto);
    }

    async delete(id) {
        return await this.userRepository.delete(id);
    }
}