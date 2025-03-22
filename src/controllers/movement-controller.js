export class MovementController {
    constructor(movementService) {
        this.movementService = movementService;

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.getWithPagination = this.getWithPagination.bind(this);
    }

    async create(req, res) {
        try {
            const { body } = req;
            const movement = await this.movementService.create(body);

            res.status(200).json(movement);
        }catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            const movement = await this.movementService.update(id, body);

            res.status(200).json(movement);
        }catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            const movement = await this.movementService.delete(id);

            res.status(200).json(movement);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const { query } = req;
            const movement = await this.movementService.getAll(query);
            res.status(200).json(movement);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getWithPagination(req, res) {
        try {
            const { query } = req;
            const movement = await this.movementService.getWithPagination(query);
            res.status(200).json(movement);
        }catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const movement = await this.movementService.getById(id);
            res.status(200).json(movement);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}