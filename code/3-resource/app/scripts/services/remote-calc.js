'use strict';


angular.module('baseApp').factory('CalculatorResource', function($resource) {
    var baseUri = 'http://mortgage-demo.appspot.com/mortgage_calculator/rs/'; // app engine baseUri
    var CalculatorResource = $resource(baseUri+':price/:down/:interest/:term');
    return CalculatorResource;
});

angular.module('baseApp').factory('calculatorService', function(CalculatorResource) {
    return {
        calculateMortgage: function (price, down, interest, term, callback) {
            CalculatorResource.get({
                price: price,
                down: down,
                interest: interest,
                term: term
            }, callback,
            function(error) {
                console.error(error);
            });
        }
    };
});
