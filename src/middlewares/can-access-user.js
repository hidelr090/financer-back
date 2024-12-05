export function canAccessUser(req, res, next) {
    const { params, body, query } = req;

    const userId = params.userId || body.userId || query.userId;

    if (req.user.id !== userId) {
        res.status(403).send({message: 'User does not have access to this user.'});
    }

    next();
}