'use strict';

angular.module('medistreamApp')
  .directive('cookiesAlert', function ($cookieStore) {
    return {
      restrict: 'A',
      templateUrl: 'template/cookies/cookies-alert.html',
      link: function ($scope, $element) {

        $scope.setCookieLawAccepted = function () {
          $cookieStore.put('cookielaw', true);
        }

        // hide alert if user closed before
        if ($cookieStore.get('cookielaw')) {
          $element.hide();
        }
      }
    };
  });
