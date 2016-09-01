var readsql = require('../CommonUtils/ReadMysql.js');
function readTestdataJson(json, scenarioName, testcaseName, columnName){
	var jsonpath = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jsonpath-plus');
	var result;
	result = jsonpath({json: json, path: '$..[?(@.ScenarioID == "' + scenarioName + '" && @.TestcaseID == "' + testcaseName + '")].' + columnName + ''});
	console.log(columnName + ": " + result[0]);
	return result[0];
}
function readSqldataJson(id, columnName){
    var conn = readsql.createConnection();
    var query = readsql.executeQuery(conn, "select * from account");
    
    //query.next();
    //console.log(query.next().value);
    var jsonpath = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jsonpath-plus');
	var result;
    console.log( '$..[?(@.id == "' + id + '")].' + columnName + '');
    console.log(query);
	result = jsonpath({json: query, path: '$..[?(@.id == "' + id + '")].' + columnName + ''});
	console.log(columnName + ": " + result);
	return result;
}
module.exports = {
    readTestdataJson: readTestdataJson,
    readSqldataJson: readSqldataJson
};