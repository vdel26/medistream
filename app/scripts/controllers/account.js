'use strict';

angular.module('medistreamApp')
  .controller('AccountCtrl', function ($scope, UserResource, SpecialityResource) {

    $scope.user = UserResource.get({action: 'current'});
    $scope.specialities = SpecialityResource.query();

    $scope.submit = function () {
      $scope.error = null;
      $scope.success = false;

      // save
      $scope.user.$save({action: 'current'}, function (response) {
        $scope.success = response;
      }, function (response) {
        $scope.error = response.data;
      });
    };
  });
