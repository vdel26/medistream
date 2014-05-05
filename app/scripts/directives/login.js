'use strict';

angular.module('medistreamApp')
  .directive('login', function ($http, $cookieStore, authService) {
    return {
      restrict: 'A',
      templateUrl: 'template/login/login.html',
      link: function ($scope, $element) {
        $element.bind('submit', function () {

          $http.post('http://localhost:8001/api-token-auth/', {
            username: $scope.username,
            password: $scope.password
          })
            .success(function (response) {
              $cookieStore.put('djangotoken', response.token);
              $http.defaults.headers.common.Authorization = 'Token ' + response.token;
              authService.loginConfirmed(response);
            });
        });
      }
    };
  });
