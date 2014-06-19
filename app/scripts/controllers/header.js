'use strict';

angular.module('medistreamApp')
  .controller('HeaderCtrl', function ($rootScope, $scope, $location, authService) {

    $scope.isActive = function (tab) {
      return $location.path().indexOf('/' + tab) === 0;
    };

    $scope.showLogin = function (newUser) {
      $rootScope.$broadcast('event:auth-loginRequired', {newUser: newUser});
    };

    $scope.logout = function () {
      authService.loginCancelled({}, 'logout');
    };
  });
