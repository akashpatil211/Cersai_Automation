import { readFile, writeFile, utils } from 'xlsx';

const filePath =
'D:/Legal Automation Project/Legal_cersai/testData/testData_create_Legal.xlsx';

function getTestData(sheetName) {

    const workbook = readFile(filePath);

    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found`);
    }

    return utils.sheet_to_json(sheet);
}


//================ WRITE DATA ======================

function writeCellData(sheetName, tcNum, columnName, value) {

    const workbook = readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet ${sheetName} not found`);
    }

    const jsonData = utils.sheet_to_json(worksheet);

    const rowIndex = jsonData.findIndex(
        row => String(row.TC_Num) === String(tcNum)
    );

    if (rowIndex === -1) {
        throw new Error(`TC_Num ${tcNum} not found`);
    }

    jsonData[rowIndex][columnName] = value;

    const newSheet = utils.json_to_sheet(jsonData);

    workbook.Sheets[sheetName] = newSheet;

    writeFile(workbook, filePath);

    console.log(
        `Updated ${columnName} for ${tcNum} : ${value}`
    );
}

export default {
    getTestData,
    writeCellData
};