import jwt from "jsonwebtoken";

export function generateToken(payload) {
    const secretKey = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.JWT_EXPIRES || '8';

    if (!secretKey) {
        throw new Error('JWT_SECRET_KEY is not configured.');
    }

    const options = { expiresIn: expiresIn.toString() + 'h' };

    return jwt.sign(payload, secretKey, options);
}

export function verifyToken(token) {
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        throw new Error('JWT_SECRET_KEY is not configured.');
    }

    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token expired');
        }
        if (error.name === 'JsonWebTokenError') {
            throw new Error('Invalid token');
        }
        throw error;
    }
}
