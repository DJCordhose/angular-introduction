'use strict';

angular.module('baseApp')
  .controller('MainCtrl', function ($scope, $location) {
    function calc() {
        $scope.result = calculateMortgage($scope.price, $scope.down, $scope.interest, $scope.term);
    }

    $scope.calc = calc;

  });
