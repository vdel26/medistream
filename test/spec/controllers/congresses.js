'use strict';

describe('Controller: CongressesCtrl', function () {

  // load the controller's module
  beforeEach(module('medistreamApp'));

  var CongressesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CongressesCtrl = $controller('CongressesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
