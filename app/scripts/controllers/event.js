'use strict';

angular.module('medistreamApp')
  .controller('EventCtrl', function ($scope, $routeParams, EventResource, TalkResource) {

    var eventId = $routeParams.id;

    // load event
    $scope.event = EventResource.get({id: eventId});

    // load talks
    $scope.talks = TalkResource.query({event: eventId});
  });
