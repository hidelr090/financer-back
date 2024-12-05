import {makeSpreadsheetService} from "../services/spreadsheet-service-factory.js";
import {SpreadsheetController} from "../../controllers/spreadsheet-controller.js";

export const makeSpreadsheetController = () => {
    const spreadSheetService = makeSpreadsheetService();

    return new SpreadsheetController(spreadSheetService);
}