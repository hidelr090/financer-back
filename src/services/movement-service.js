export class MovementService {
    constructor(movementRepository) {
        this.movementRepository = movementRepository;
    }

    async create (dto) {
        return this.movementRepository.create(dto);
    }

    async update (movementId, dto) {
        return this.movementRepository.update(movementId, dto);
    }

    async delete (movementId) {
        return this.movementRepository.delete(movementId);
    }

    async getAll (dto) {
        return this.movementRepository.selectAll(dto);
    }

    async getWithPagination (dto, paginationOptions) {
        return this.movementRepository.selectByPagination(dto, paginationOptions);
    }

    async getById (id) {
        return this.movementRepository.selectById(id);
    }
}