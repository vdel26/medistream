'use strict';

angular.module('medistreamApp')
  .controller('TalkCtrl', function ($scope, $routeParams, EventResource, TalkResource) {

    var talkId = $routeParams.id;

    // load event
    TalkResource.get({id: talkId}, function (response) {
      $scope.talk = response;

      $scope.event = EventResource.get({id: $scope.talk.event});
    });
  });
