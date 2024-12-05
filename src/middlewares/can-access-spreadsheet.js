import { Spreadsheet } from '../database/models/Spreadsheet.js';

export async function canAccessSpreadsheet(req, res, next) {
    const { params, body } = req;

    const spreadsheetId = params.spreadsheetId || body.spreadsheetId;

    if (!spreadsheetId) {
        return res.status(403).send({ message: 'No spreadsheetId provided' });
    }

    try {
        const spreadsheet = await Spreadsheet.findOne({
            where: { id: spreadsheetId, userId: req.user.id },
            raw: true
        });

        if (!spreadsheet) {
            return res.status(403).send({ message: 'Cannot access spreadsheet' });
        }
        req.query.userId = req.user.id;
        next();
    } catch (error) {
        console.error('Error while checking spreadsheet access:', error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
}
