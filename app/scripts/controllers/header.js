'use strict';

angular.module('medistreamApp')
  .controller('HeaderCtrl', function ($scope, $window, $location) {

    $scope.isActive = function (tab) {
      return $location.path().indexOf('/' + tab) === 0;
    };

    $scope.signin = function() {

      // TODO signin
      $scope.user = {
        name: 'fake user'
      };
    };

    $scope.signout = function() {

      // TODO signout
      $scope.user = null;
    };
  });
