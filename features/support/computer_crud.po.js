var CrudComputer = function() {
    var btnAdd= by.css('.btn.success'),
        btnCancel= by.css('.actions>a'),
        btnDelete= by.css('.btn.danger');

    this.clickAdd = function(button) {
        return  element(btnAdd).click();
    };

    this.fillComputer = function(name, introduced, discontinued, company= '-- Choose a company --'){
        element(by.id('name')).sendKeys(name);
        element(by.id('introduced')).sendKeys(introduced);
        element(by.id('discontinued')).sendKeys(discontinued);
        element(by.cssContainingText('option', company)).click();

    };

    this.cleanFields=function () {
        element(by.id('name')).clear();
        element(by.id('introduced')).clear();
        element(by.id('discontinued')).clear();
        element(by.cssContainingText('option', '-- Choose a company --')).click();
    };


    this.clickCreate = function(btnname) {
        return element(by.css('[class="btn primary"]'+ '[value="'+ btnname +'"]')).click();

    };

    this.clickCancel = function() {
        return element(btnCancel).click();
    };

    this.clickDelete = function() {
        return element(btnDelete).click();
    };

//     this.selectitem = function(name){
//         element(txtsearch).sendKeys(name);
//         element(btnSearch).click();
//         return element(itemgrid).click();
//     };
//
//     this.sort = function() {
//        return element(sortByName).click();
//     };
//
//     this.CanSort= function () {
//         var prevSort='', finalSort='';
//         var defer = protractor.promise.defer();
//         var itemsBefore =  element.all(by.css('td:first-child a'));
//             itemsBefore.first().getAttribute('href').then(function(value) {
//                  this.prevSort = value;
//
//                 element(sortByName).click();
//                 var itemsAfter =  element.all(by.css('td:first-child a'));
//                 itemsAfter.first().getAttribute('href').then(function(value) {
//                     this.finalSort= value;
//                     if(this.finalSort!==this.prevSort) {defer.fulfill();}else{defer.reject("Sort is not working!")};
//                 });
//
//             });
//
// return defer.promise;
//     };
    
};

module.exports = CrudComputer;
