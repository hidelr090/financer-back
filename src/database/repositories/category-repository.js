import {Category} from "../models/index.js";

export class CategoryRepository {
    constructor() {
        this.repository = Category;
    }

    async create (category) {
        try {
            return await this.repository.create(category);
        } catch (error) {
            throw error;
        }
    }

    async selectAll() {
        try {
            return await this.repository.findAll({raw: true});
        }catch (error) {
            throw error;
        }
    }

    async selectByWhere (conditions) {
        try {
            return await this.repository.findOne({where: conditions, raw: true});
        } catch (error) {
            throw error;
        }
    }

    async selectByPagination (conditions, paginationOptions ){
        try {
            const { page = 1, pageSize = 10 } = paginationOptions;
            const offset = (page - 1) * pageSize;
            return await this.repository.findAll({where: conditions, limit: pageSize, offset, raw: true});
        } catch (error) {
            throw error;
        }
    }

    async selectById(categoryId) {
        try {
            return await this.repository.findOne({
                where: {
                    id: categoryId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }

    async update(id, category) {
        try {
            await this.repository.update({...category}, {where: {id}});
            return await this.repository.findOne({where: {id}});
        } catch(error) {
            throw error;
        }
    }

    async delete(categoryId) {
        try {
            await this.repository.destroy({
                where: {
                    id: categoryId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }
}