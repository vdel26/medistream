'use strict';

angular.module('medistreamApp')
  .service('UserResource', function UserResource($resource) {
    return $resource('API_BASE_PATH/users/:id/:action/');
  });