'use strict';

angular.module('medistreamApp')
  .service('EventResource', function EventResource($resource) {
    return $resource('API_BASE_PATH/events/:id');
  });
