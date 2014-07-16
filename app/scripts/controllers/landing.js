'use strict';

angular.module('medistreamApp')
  .controller('LandingCtrl', function ($rootScope, $scope, $cookieStore) {
    $scope.slides = [
      {
        image: 'images/slide1.png',
        title: 'slide1.title',
        description: 'slide1.description'
      },
      {
        image: 'images/slide2.png',
        title: 'slide2.title',
        description: 'slide2.description'
      }
    ];

    $scope.showLogin = function (newUser) {
      $rootScope.$broadcast('event:auth-loginRequired', {newUser: newUser});
    };

    $scope.specialities = ['Dentistry', 'Anesthesia', 'Biomedicine', 'Pediatrics'];
    $scope.conf = $cookieStore.get('conf') || {
      speciality: $scope.specialities[0]
    };

    // save user configuration cookie if it changes
    $scope.$watch('conf', function () {
      $cookieStore.put('conf', $scope.conf);
    }, true);
  });
