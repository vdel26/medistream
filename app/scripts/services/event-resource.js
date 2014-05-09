'use strict';

angular.module('medistreamApp')
  .service('EventResource', function EventResource($resource) {
    return $resource('/api/events/:id');
  });
