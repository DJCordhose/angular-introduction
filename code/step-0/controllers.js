"use strict";

function HelloController($scope) {
    $scope.name = 'Olli';
    $scope.greeting = 'Hello';
    $scope.click = function() {
        $scope.greeting = '';
    };
    $scope.animals = ['cat', 'dog', 'bird'];
}