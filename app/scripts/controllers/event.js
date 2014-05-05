'use strict';

angular.module('medistreamApp')
  .controller('EventCtrl', function ($scope, $routeParams, EventResource) {
    $scope.event = EventResource.get({id: $routeParams.id});
  });
