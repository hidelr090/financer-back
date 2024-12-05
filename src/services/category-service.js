export class CategoryServiceService {
    constructor(categoryServiceRepository) {
        this.categoryServiceRepository = categoryServiceRepository;
    }

    async createCategoryService (dto) {
        return this.categoryServiceRepository.create(dto);
    }

    async updateCategoryService (categoryServiceId, dto) {
        return this.categoryServiceRepository.update(categoryServiceId, dto);
    }

    async deleteCategoryService(id) {
        return this.categoryServiceRepository.delete(id);
    }
}