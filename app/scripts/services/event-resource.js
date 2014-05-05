'use strict';

angular.module('medistreamApp')
  .service('EventResource', function EventResource($resource) {
    return $resource('http://localhost:8001/api/events/:id');
  });
