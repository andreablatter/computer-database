
exports.config = {


  multiCapabilities: [{
    'browserName': 'chrome'
    }

  ],
  specs: ['./features/*.feature'],

 onPrepare: function() {
    browser.ignoreSynchronization = true;
     browser.driver.manage().window().maximize();
 },

  framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    resultJsonOutputFile: 'report.json',

  // ----- Options to be passed to cucumber -----
  cucumberOpts: {
    // Require files before executing the features.
    require: [
      './features/support/*.js',
      './features/step_definitions/*.js'
    ],

    format: 'pretty',
    keepAlive: false
  },

  onCleanUp: function() {}
};
