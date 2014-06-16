'use strict';

angular.module('medistreamApp')
  .service('TalkResource', function TalkResource($resource) {
    return $resource('API_BASE_PATH/talks/:id/');
  });
