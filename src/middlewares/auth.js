import {verifyToken} from "../utils/jwt.js";
import {User} from "../database/models/User.js";

export async function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).send('Token not provided');
    }

    try {
        const { userId } = verifyToken(token);
        req.user = await User.findOne({where: { id: userId }, raw: true});
        next();
    } catch (err) {
        if (err.message === 'Token expired') {
            return res.status(401).send('Token expired. Please log in again.');
        }
        if (err.message === 'Invalid token') {
            return res.status(403).send('Invalid token');
        }
        return res.status(500).send('Error verifying token: ' + err.message);
    }
}
