/**
 * conf.js
 */

var HtmlScreenshotReporter = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jasmine-reporters');
var reporter = new HtmlScreenshotReporter({
  dest: 'D:/TESTING/Protractor/ProtractorFW/Reports',
  filename: 'report.html'
});
console.log('working');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Testscripts/specfile.js'],      
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