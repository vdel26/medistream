'use strict';

angular.module('medistreamApp')
  .controller('EventsCtrl', function ($scope, EventResource) {
    $scope.events = EventResource.query();
  });
