'use strict';

angular.module('medistreamApp')
  .controller('ContactCtrl', function ($scope, $http) {

    var onSuccess = function () {
      $scope.response = 'success';

      // cleanup form
      $scope.email = $scope.name = $scope.phone = $scope.message = null;
    };

    var onError = function () {
      $scope.response = 'error';
    };

    $scope.send = function () {
      $scope.response = null;

      $http.post('API_BASE_PATH/contact/', {
        email: $scope.email,
        name: $scope.name,
        phone: $scope.phone,
        message: $scope.message
      }).success(onSuccess).error(onError);
    };
  });
