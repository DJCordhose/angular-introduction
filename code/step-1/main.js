'use strict';

angular.module('calculatorDemoApp')
  .controller('MainCtrl', function ($scope, $location) {
    function calc() {
        $scope.result = calculateMortgage($scope.price, $scope.down, $scope.interest, $scope.term);
    }

    $scope.calc = calc;

  });
