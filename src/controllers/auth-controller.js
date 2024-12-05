export class AuthController {
    constructor(authService) {
        this.authService = authService;

        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(req, res) {
        try {
            const { body } = req;

            const response = await this.authService.authenticate(body);

            res.status(200).json(response);
        }catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}