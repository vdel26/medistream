'use strict';

angular.module('medistreamApp')
  .controller('EventCtrl', function ($scope, $routeParams, $filter, EventResource, TalkResource) {

    var eventId = $routeParams.id;

    // load event
    $scope.event = EventResource.get({id: eventId});

    // load talks
    TalkResource.query({event: eventId}, function (response) {
      $scope.days = [];
      $scope.talksByDay = {};
      angular.forEach(response, function (talk) {
        var date = new Date(talk.start_time);
        var sdate = $filter('date')(date, 'longDate');
        if ($scope.days.indexOf(sdate) < 0) {
          $scope.days.push(sdate);
          $scope.talksByDay[sdate] = [];
        }
        $scope.talksByDay[sdate].push(talk);
      });
    });
  });
