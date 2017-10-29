var NavigateComputer = function() {
    var itemgrid=  by.css('tbody tr:first-child td:first-child a'),
        itemPrevOrd= by.css('td:first-child a'),
        txtsearch= by.css('input#searchbox'),
        sortByName= by.css('th:nth-child(1)'),
        btnSearch= by.css('.btn#searchsubmit'),
        btnCancel= by.css('.actions>a');

    this.navigate=function(action){
        element(by.css('.' + action + ' a')).click();
    };

    this.openItem = function() {
        element(by.css('tr:first-child td a')).click();
        return element(btnCancel).click();
    };
    
    this.selectItem = function(name){
        element(txtsearch).sendKeys(name);
        element(btnSearch).click();
        return element(itemgrid).click();
    };

    this.sort = function() {
       return element(sortByName).click();
    };

    this.CanSort= function () {
        var prevSort='', finalSort='';
        var defer = protractor.promise.defer();
        var itemsBefore =  element.all(itemPrevOrd);
            itemsBefore.first().getAttribute('href').then(function(value) {
                 this.prevSort = value;

                element(sortByName).click();
                var itemsAfter =  element.all(itemPrevOrd);
                itemsAfter.first().getAttribute('href').then(function(value) {
                    this.finalSort= value;
                    if(this.finalSort!==this.prevSort) {defer.fulfill();}else{defer.reject("Sort is not working!")};
                });

            });

return defer.promise;
    };

};

module.exports = NavigateComputer;
