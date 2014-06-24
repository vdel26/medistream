'use strict';

angular.module('medistreamApp')
  .directive('login', function ($rootScope, $http, $cookieStore, $location, UserResource, authService) {
    return {
      restrict: 'A',
      templateUrl: 'template/login/login.html',
      link: function ($scope) {

        var onLoginSuccess = function (response) {

          // cleanup possible errors produced before
          $scope.error = null;

          // add auth header for deferred requests
          var updater = function (config) {
            config.headers.Authorization = 'Token ' + response.token;
            return config;
          };

          // emit login confirmed
          authService.loginConfirmed({
            username: $scope.email,
            token: response.token
          }, updater);
        };

        $scope.login = function () {
          $http.post('API_BASE_PATH/api-token-auth/', {
            username: $scope.email,
            password: $scope.password
          }).success(
            onLoginSuccess
          ).error(function (data) {
              $scope.error = data;
            });
        };

        $scope.register = function () {

          // retrieve new user information
          var user = {
            username: $scope.email,
            email: $scope.email,
            password: $scope.password
          };

          // register new user
          UserResource.save({action: 'register'}, user, function (response) {

            // cleanup possible errors produced before
            $scope.error = null;

            // login to retrieve token
            $scope.login(response);
          }, function (response) {

            // keep error to show in the view
            $scope.error = response.data;
          });
        };

        $scope.setNewUser = function (newUser) {
          $location.search('newUser', newUser ? 'true' : 'false');
        };

        // show login or registration if new user
        $rootScope.$on('$routeChangeStart', function (scope, next) {
          $scope.newUser = (next.params.newUser === 'true');
        });
      }
    };
  });
