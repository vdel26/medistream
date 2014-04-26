'use strict';

describe('Controller: LectureCtrl', function () {

  // load the controller's module
  beforeEach(module('medistreamApp'));

  var LectureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LectureCtrl = $controller('LectureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
