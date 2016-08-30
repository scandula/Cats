function readSheetDataIntoJson(xlsxPath, sheetName){
	var xlsx = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/xlsx');
	
	console.log('xlsx File path: ' + xlsxPath);
	var workbook = xlsx.readFile(xlsxPath);
   
	/* Get worksheet */
	console.log('workbook sheet name: ' + sheetName);
	var worksheet = workbook.Sheets[sheetName];
	var data = xlsx.utils.sheet_to_json(worksheet, {raw: true});
	console.log("JSON Response: " + JSON.stringify(data));
	return data;
}

module.exports = {
    readSheetDataIntoJson: readSheetDataIntoJson
};