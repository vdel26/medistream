'use strict';

angular.module('medistreamApp')
  .controller('LandingCtrl', function ($rootScope, $scope, $cookieStore) {
    $scope.slides = [
      {
        image: 'images/slide1.png',
        title: 'Slide 1',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
      },
      {
        image: 'images/slide2.png',
        title: 'Slide 2',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
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
