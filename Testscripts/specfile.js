/**
 * 
 */

//describe('log file creation', function() {
//     
//    var log4js = require('D:/ProtracorTest/Protractor/npm-3.10.6/npm-3.10.6/bin/node_modules/log4js');
//    
//     log4js.configure({
//           appenders: [
//           {
//        //       { "type" = "console" },
//           type:"file",
//           filename:"D:/TESTING/Protractor/ProtractorFW/Logs",
//           maxLogSize:20480,
//           backups:3,
//           category:"relative-logger"
//        
//           }
//           ]
//           });
//    var logger = log4js.getLogger('relative-logger');
//    var email = element(by.xpath("//input[@id='signInEmail']"));
//    var password = element(by.xpath("//input[@id='signInPassword']"));
//    var login = element(by.xpath("//div[@id='dynamic-content']/form/div/div/div/div[4]/button"));
//
//
//it('should create log file', function() {
//
//
//    browser.get('http://ecommerce.aisel.co/en/');
//    browser.driver.manage().window().maximize();
//    element(by.xpath("html/body/header/div/div/div[2]/ul[2]/li[2]/a")).click();
//    logger.info('clicked');
//    email.click();
//    email.sendKeys("arzoomalik94@gmail.com");
//    logger.info('email id written');
//    password.click();
//    password.sendKeys("arzoomalik");
//    logger.info('password written');
//    login.click();  
//    logger.info('login button clicked');
// });
// });




describe('ECommerce Web App', function() {
	var readexceldata = require('../CommonUtils/ReadExcelData.js');
	var readjson = require('../CommonUtils/ReadJson.js');
    var readsql = require('../CommonUtils/ReadMysql.js');
    var Q = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/Q');
    
	var email = element(by.xpath("//input[@id='signInEmail']"));
    var password = element(by.xpath("//input[@id='signInPassword']"));
	var login = element(by.xpath("//div/button[text()='Log In'][@class='btn btn-primary'][@type='submit']"));
    var close = element(by.css('button[ng-click*="$dismiss"]'));
//	var json = readexceldata.readSheetDataIntoJson("./Testdata/Testdata.xlsx", "Sheet1");
	
    
    console.log('sql command run');
    var query = readsql.executeQuery("fsm", "select * from account");
   

    //query.then(function(data){return data;});
    console.log(query);
    console.log('query run');
    
    beforeEach(function() {
		browser.get('http://ecommerce.aisel.co/en/');
        browser.driver.manage().window().maximize();
	});

	it('should select Products link', function() {
		//browser.pause();
		element(by.css('a[href="/en/products/"]')).click();
		element(by.xpath('//a[@class="thumb ng-binding"]')).click();
	   
		expect(element(by.css('h2[class="ng-binding"]')).getText()).toEqual('Nike Baseball Hat 100');
		element(by.css('button[class="btn btn-success"]')).click();
		email.click();
		email.sendKeys(readjson.readSqldataJson(query, "1" , "username"));
		//email.sendKeys("arzoomalik94@gmail.com");
//		email.sendKeys(readjson.readTestdataJson(json, "SC1", "TC2", "Username"));
		
		password.click();
		//password.sendKeys("arzoomalik");
		//register.click();
		close.click();          
		
//		element(by.css('a[ng-href="/en/products/"]')).click();     /* Products link is unclickable */
//		element(by.xpath('//a[@class="thumb ng-binding"]')).click();
//		expect(element(by.css('h2[class="ng-binding"]')).getText()).toEqual('Nike Baseball Hat 100');
//		element(by.css('button[class="btn btn-success"]')).click();
//		 
//		element(by.css('a[ui-sref="cart({locale: locale})"]')).click();
//		element(by.xpath('a[class="pull-right btn btn-warning btn-lg"]')).click();
//		
//		element(by.css('input[id="country"]')).sendKeys("India");
//		element(by.css('input[id="region"]')).sendKeys("Telangana");
//		element(by.css('input[id="city"]')).sendKeys("Hyderabad");
//		element(by.css('input[id="phone"]')).sendKeys("9999999999"); 
//		element(by.css('textarea[id="billing_comment"]')).sendKeys("ABC");
//		element(by.css('button[class="btn btn-warning btn-lg"]')).click();
//		
//		element(by.css('a[class="dropdown-toggle ng-binding"]')).click();
//		element(by.css('a[ng-click="signOut()"]')).click();
    });
});
