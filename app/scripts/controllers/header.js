'use strict';

angular.module('medistreamApp')
  .controller('HeaderCtrl', function ($scope, $window, $location) {

    $scope.tabs = ['congresses'];

    $scope.isActive = function (tab) {
      return $location.path().indexOf('/' + tab) === 0;
    };

    $scope.login = function() {

      // TODO login
      $scope.user = {
        name: 'fake user'
      };
    };

    $scope.logout = function() {

      // TODO logout
      $scope.user = null;
    };
  });
