import {Movement} from "../models/index.js";

export class MovementRepository {
    constructor() {
        this.repository = Movement;
    }

    async create (movement) {
        try {
            return await this.repository.create(movement);
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

    async selectById(movementId) {
        try {
            return await this.repository.findOne({
                where: {
                    id: movementId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }

    async update(id, movement) {
        try {
            await this.repository.update({...movement}, {where: {id}});
            return await this.repository.findOne({where: {id}});
        } catch(error) {
            throw error;
        }
    }

    async delete(movementId) {
        try {
            await this.repository.destroy({
                where: {
                    id: movementId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }
}