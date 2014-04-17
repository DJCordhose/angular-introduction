'use strict';

angular.module('baseApp').directive('controlGroup', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/partials/control-group.html',
        replace: true,
        scope: {
            model:'=',
            name:'@',
            min:'@',
            step:'@'
        }
    };

});
