import {Spreadsheet} from '../models/Spreadsheet.js';

export class SpreadsheetRepository {
    constructor() {
        this.repository = Spreadsheet;
    }

    async create (spreadsheet) {
        try {
            console.log(spreadsheet);
            return await this.repository.create(spreadsheet);
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

    async selectById(spreadsheetId) {
        try {
            return await this.repository.findOne({
                where: {
                    id: spreadsheetId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }

    async update(id, spreadsheet) {
        try {
            await this.repository.update({...spreadsheet}, {where: {id}});
            return await this.repository.findOne({where: {id}});
        } catch(error) {
            throw error;
        }
    }

    async delete(spreadsheetId) {
        try {
            await this.repository.destroy({
                where: {
                    id: spreadsheetId
                }, raw: true
            })
        }catch (error) {
            throw error;
        }
    }
}