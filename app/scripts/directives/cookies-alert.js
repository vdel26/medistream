'use strict';

angular.module('medistreamApp')
  .directive('cookiesAlert', function () {
    return {
      restrict: 'A',
      templateUrl: 'template/cookies/cookies-alert.html',
      link: function ($scope, $element) {

        $scope.setCookieLawAccepted = function () {
          localStorage.setItem('cookielaw', true);
        };

        // hide alert if user closed before
        if (localStorage.getItem('cookielaw')) {
          $element.hide();
        }
      }
    };
  });
