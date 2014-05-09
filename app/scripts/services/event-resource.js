'use strict';

angular.module('medistreamApp')
  .service('EventResource', function EventResource($resource) {
    return $resource('/backend/api/events/:id');
  });
