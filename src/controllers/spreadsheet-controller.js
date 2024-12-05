export class SpreadsheetController {
    constructor(spreadsheetService) {
        this.spreadsheetService = spreadsheetService;

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getWithPagination = this.getWithPagination.bind(this);
    }

    async create(req, res) {
        try {
            const { body } = req;
            const spreadsheet = await this.spreadsheetService.create(body);

            res.status(200).json(spreadsheet);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            const spreadsheet = await this.spreadsheetService.update(id, body);

            res.status(200).json(spreadsheet);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.spreadsheetService.delete(id);
            res.status(204).json();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const spreadsheet = await this.spreadsheetService.getAll();
            res.status(200).json(spreadsheet);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getWithPagination(req, res) {
        try {
            const spreadsheet = await this.spreadsheetService.getWithPagination(req.query);
            res.status(200).json(spreadsheet);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById (req, res) {
        try {
            const spreadsheet = await this.spreadsheetService.getById(req.params.id);
            res.status(200).json(spreadsheet);
        }catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
}
