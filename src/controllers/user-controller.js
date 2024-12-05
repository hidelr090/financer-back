export class UserController {
    constructor(userService) {
        this.userService = userService;

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req, res) {
        try {
            const { body } = req;
            const user = await this.userService.create(body);

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            const user = await this.userService.update(id, body);

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.userService.delete(id);
            res.status(204).json();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
