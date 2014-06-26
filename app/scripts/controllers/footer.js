'use strict';

angular.module('medistreamApp')
  .controller('FooterCtrl', function ($scope, $translate) {

    $scope.getCurrentLanguageName = function (currentLocale) {
      return _.findWhere($scope.languages, {locale: currentLocale});
    };

    $scope.setLocale = function (locale) {
      $translate.use(locale);
      localStorage.setItem('locale', locale);
      $scope.currentLocale = locale;
    };

    $scope.languages = {
      en: 'English',
      es: 'Español',
      ca: 'Català'
    };

    $scope.currentLocale = $translate.use();
  });
