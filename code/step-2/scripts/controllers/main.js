'use strict';

angular.module('baseApp')
  .controller('MainCtrl', function ($scope, calculatorService) {
    function calc() {
        calculatorService.calculateMortgage($scope.price, $scope.down, $scope.interest, $scope.term, function(result) {
            $scope.result = result;
        });
    }

    $scope.calc = calc;

  });
