//var async = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/async');
//var data;
var mysql = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/mysql');
var Promise = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/promise');
function createConnection(){    
	
    console.log('hello');
    var connection = mysql.createConnection({
	  host     : 'localhost',
	  port     : '3306',
	  user     : 'root',
	  password : 'admin',
	  database : 'fsm'
	});	
//	connection.connect();
	
	 connection.connect();
    console.log("connection created");
	 return connection;

}

function executeQuery(conn, sqlString){
  /*  conn.query(sqlString, function(rows){
        console.log("Executing query");
        console.log(rows);
        return rows;
    });*/
//    console.log(conn);
    conn.query(sqlString, function(err, rows, fields){
        if (err) throw err; 
        console.log("Executing query");
//        console.log(rows);
        console.log(JSON.stringify(rows));
        return (rows);
        console.log('bye bye');
       // var username = mysql.utils.query_to_json(data, {raw:true});
        //var res = JSON.stringify(data[1].username);
        //console.log("JSON Response: " +res);
     //   console.log(username);
         
    });
//    console.log(data.sq);
//    return data;
}

function disconnectSql(connection){
	var sqldisconnect = connection.end();
	return sqldisconnect;
}
module.exports = {
        createConnection: createConnection,
		executeQuery: executeQuery,
		disconnectSql: disconnectSql
};