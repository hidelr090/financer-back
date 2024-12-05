import {SpreadsheetRepository} from "../../database/repositories/spreadsheet-repository.js";
import {SpreadsheetService} from "../../services/spreadsheet-service.js";

export const makeSpreadsheetService = () => {
    const spreadsheetRepository = new SpreadsheetRepository();
    return new SpreadsheetService(spreadsheetRepository);
}