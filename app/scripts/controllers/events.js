'use strict';

angular.module('medistreamApp')
  .controller('EventsCtrl', function ($scope, $location, EventResource) {
    $scope.events = EventResource.query();

    $scope.select = function(id) {
      $location.path('events/' + id);
    };
  });
