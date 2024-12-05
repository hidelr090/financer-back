export class SpreadsheetService{
    constructor(spreadsheetServiceRepository) {
        this.spreadsheetServiceRepository = spreadsheetServiceRepository;
    }

    async create (dto) {
        return this.spreadsheetServiceRepository.create(dto);
    }

    async update (spreadsheetId, dto) {
        return this.spreadsheetServiceRepository.update(spreadsheetId, dto);
    }

    async delete(id) {
        return this.spreadsheetServiceRepository.delete(id);
    }

    async getAll() {
        return this.spreadsheetServiceRepository.selectAll();
    }

    async getById (id) {
        return this.spreadsheetServiceRepository.selectByWhere({id});
    }

    async getWithPagination (parameters){
        const { conditions, pagination } = parameters;
        return this.spreadsheetServiceRepository.selectByPagination(conditions, pagination);
    }
}