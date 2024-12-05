import {User} from '../models/User.js';

export class UserRepository {
    constructor() {
        this.repository = User;
    }

    async create (user) {
        try {
            return await this.repository.create(user);
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

    async selectById(userId) {
        try {
            return await this.repository.findOne({
                where: {
                    id: userId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }

    async update(id, user) {
        try {
            await this.repository.update({...user}, {where: {id}});
            return await this.repository.findOne({where: {id}});
        } catch(error) {
            throw error;
        }
    }

    async delete(userId) {
        try {
            await this.repository.destroy({
                where: {
                    id: userId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }
}