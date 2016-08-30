	var mysql = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/mysql');
    var data;
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  port     : '3306',
	  user     : 'root',
	  password : 'admin',
	  database : 'fsm'
	});	
	connection.connect(function(err) {
    if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
    }
        console.log('connected as id ' + connection.threadId);
});
function executeQuery(database, sqlString){

	connection.query(sqlString, function(err, rows, fields){
		if (err) throw err; 
        console.log(JSON.stringify(rows));
        
       // var username = mysql.utils.query_to_json(data, {raw:true});
        //var res = JSON.stringify(data[1].username);
        //console.log("JSON Response: " +res);
     //   console.log(username);
         //return data;
	});
    var fs_readFile = Q.denodeify(connection.query);
    fs_readFile("select * from account").then(return rows);
    
}
function disconnectSql(){
	var sqldisconnect = connection.end();
	return sqldisconnect;
}

module.exports = {
		executeQuery: executeQuery,
		disconnectSql: disconnectSql
};