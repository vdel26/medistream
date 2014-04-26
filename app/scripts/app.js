'use strict';

angular.module('medistreamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/congresses', {
        templateUrl: 'views/congresses.html',
        controller: 'CongressesCtrl'
      })
      .when('/congresses/:id', {
        templateUrl: 'views/congress.html',
        controller: 'CongressCtrl'
      })
      .when('/lectures/:id', {
        templateUrl: 'views/lecture.html',
        controller: 'LectureCtrl'
      })
      .when('/collaborate', {
        templateUrl: 'views/collaborate.html',
        controller: 'CollaborateCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
