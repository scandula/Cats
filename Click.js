//HtmlReport.js
//click function
function Click(variable,message){
    //log
    var log4js = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/log4js');
    
    log4js.configure({
           appenders: [
           {
           type:"file",
           filename:"D:/TESTING/Protractor/ProtractorFW/Logs/log4js.txt",
           maxLogSize:20480,
           backups:3,
           category:"relative-logger"
           }
           ]
           });
    
    var logger = log4js.getLogger('relative-logger');
    //logger.debug("Some debug messages");
    
    variable.click().
    then(function() {
    return logger.info(message);
    });
    
}
module.exports = {
    Click: Click
};