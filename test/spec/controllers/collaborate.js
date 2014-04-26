'use strict';

describe('Controller: CollaborateCtrl', function () {

  // load the controller's module
  beforeEach(module('medistreamApp'));

  var CollaborateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollaborateCtrl = $controller('CollaborateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
