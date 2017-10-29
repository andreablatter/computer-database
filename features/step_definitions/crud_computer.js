computerCrud = new(require('../support/computer_crud.po.js'))();
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

module.exports = function() {
    var EC = protractor.ExpectedConditions;
    
    this.Given(/^I am on the Computer database screen$/, function () {
        return browser.get('http://computer-database.herokuapp.com/computers');
    });
    
    this.When(/^I press button Add a New Computer$/, function () {
        return computerCrud.clickAdd();
    });
    
    this.When(/^I "([^"]*)" computer name "([^"]*)", introduced date "([^"]*)", discontinued date "([^"]*)" and select the company "([^"]*)"$/, function(action,name, introduced, discontinued, company) {
       if (action=="update"){
           computerCrud.cleanFields();
           }
        return computerCrud.fillComputer(name, introduced, discontinued, company);
        
    });

    this.When(/^I press button "([^"]*)"$/, function (btnname) {
        return computerCrud.clickCreate(btnname);
    });
    
    this.When(/^I press the button Delete$/, function () {
        return computerCrud.clickDelete();
    });
    
    // this.When(/^I select "([^"]*)" in a list$/, function (name) {
    //     computerCrud.clickAdd();
    //     computerCrud.fillComputer(name, "", "");
    //     computerCrud.clickCreate("Create this computer");
    //     return navigateComputer.selectItem(name);
    // });
    //
    this.Then(/^I should see an action confirmation message "([^"]*)"$/, function (name) {
      var el= element(by.css('.alert-message'));
      return el.getText().then(function(text){expect(text).contain(name)});
     });
    
     this.Then(/^I should see a message for a field "([^"]*)"$/, function (message) {
         var el= element(by.css('[class="clearfix error"] [name='+ message + ']+ [class="help-inline"]'));
         if (message== 'name'){return el.getText().then(function(text){expect(text).equal("Required")});}
        else{return el.getText().then(function(text){expect(text).equal("Date (\'yyyy-MM-dd\')")});}
     });
    
     this.Then(/^I should not see a computer created$/, function () {
         var el= element(by.css('.alert-message'));
        return expect(el.isPresent()).to.eventually.equal(false);
    });

    this.When(/^I press the button Cancel$/, function () {
         return computerCrud.clickCancel();

    });
    //
    // this.When(/^I navigate to the "([^"]*)" page$/, function (action) {
    //     return computerCrud.navigate(action);
    //
    // });
    //
    // this.When(/^I open an item in a grid$/, function () {
    //     return computerCrud.openItem();
    //
    // });
    //
    // this.When(/^I press sort column$/, function () {
    //     return computerCrud.sort();
    //
    // });
    //
    // this.Then(/^I should see the first page$/, function () {
    //     var el= element(by.css('.prev.disabled'));
    //     return expect(el.isPresent()).to.eventually.equal(true);
    // });
    //
    // this.Then(/^I should see the items ordered$/, function () {
    //     return computerCrud.CanSort();
    // });
    
};