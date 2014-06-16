'use strict';

angular.module('medistreamApp')
  .directive('login', function ($rootScope, $http, $cookieStore, $location, authService) {
    return {
      restrict: 'A',
      templateUrl: 'template/login/login.html',
      link: function ($scope, $element) {

        var onLoginSuccess = function (response) {

          // add auth header for deferred requests
          var updater = function (config) {
            config.headers.Authorization = 'Token ' + response.token;
            return config;
          };

          // emit login confirmed
          authService.loginConfirmed({
            username: $scope.username,
            token: response.token
          }, updater);
        };

        $scope.login = function () {
          $http.post('API_BASE_PATH/api-token-auth/', {
            username: $scope.username,
            password: $scope.password
          }).success(onLoginSuccess);
        };

        // show login or registration if new user
        $rootScope.$on('$routeChangeStart', function (scope, next) {
          $scope.newUser = (next.params.newUser === 'true');
        });
      }
    };
  });
