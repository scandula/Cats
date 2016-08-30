//var HtmlReporter = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/protractor-html-screenshot-reporter');
//var path = require('path');
var HtmlScreenshotReporter = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'D:/TESTING/Protractor/ProtractorFW/Reports',
  filename: 'my-report.html'
});
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Testscripts/specfile.js'],
//  plugins: [{
//    package: 'protractor-console',
//    logLevels: ['severe']
//  }],
    onPrepare: function () {	
        browser.driver.manage().window().setSize(1680, 1050);
		// Add a reporter and store screenshots to `screnshots`:
//		jasmine.getEnv().addReporter(new HtmlReporter({
//        baseDirectory: './Reports/execReport',
		pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
          
            var monthMap = {
              "1": "Jan",
              "2": "Feb",
              "3": "Mar",
              "4": "Apr",
              "5": "May",
              "6": "Jun",
              "7": "Jul",
              "8": "Aug",
              "9": "Sep",
              "10": "Oct",
              "11": "Nov",
              "12": "Dec"
            };

            var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours(),
                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) + 
                                      '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
         }
      },
      
 capabilities: {
    browserName: 'firefox' 
},
    
    onPrepare: function() {
          var jasmineReporters = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     },
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
   },

   // Assign the test reporter to each running instance
   onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
   },

   // Close the report after all tests finish
   afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
   }
};