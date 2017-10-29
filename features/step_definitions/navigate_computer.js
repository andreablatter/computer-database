navigateComputer = new(require('../support/computer_navigate.po'))();
computerCrud = new(require('../support/computer_crud.po'))();
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

module.exports = function() {
    var EC = protractor.ExpectedConditions;
    
    
    this.When(/^I select "([^"]*)" in a list$/, function (name) {
        computerCrud.clickAdd();
        computerCrud.fillComputer(name, "", "");
        computerCrud.clickCreate("Create this computer");
        return navigateComputer.selectItem(name);
    });

    
    this.When(/^I navigate to the "([^"]*)" page$/, function (action) {
        return navigateComputer.navigate(action);

    });
    
    this.When(/^I open an item in a grid$/, function () {
        return navigateComputer.openItem();

    });

    this.When(/^I press sort column$/, function () {
        return navigateComputer.sort();

    });

    this.Then(/^I should see the first page$/, function () {
        var el= element(by.css('.prev.disabled'));
        return expect(el.isPresent()).to.eventually.equal(true);
    });

    this.Then(/^I should see the items ordered$/, function () {
        return navigateComputer.CanSort();
    });
    
};