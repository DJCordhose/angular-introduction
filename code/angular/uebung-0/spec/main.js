'use strict';

describe('Controller: HelloController', function () {

    var HelloController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HelloController = $controller('HelloController', {
            $scope: scope
        });
    }));

    it('should attach a clear function to the scope', function () {
        expect(scope.clear).toEqual(jasmine.any(Function));
    });
    it('should enumerate a list of animals', function () {
        expect(scope.animals.length).toEqual(3);
    });
});
