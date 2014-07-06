'use strict';

angular.module('medistreamApp')
  .service('SpecialityResource', function SpecialityResource($resource) {
    return $resource('API_BASE_PATH/specialities/:id/');
  });