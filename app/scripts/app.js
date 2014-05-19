'use strict';

angular.module('medistreamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'fmt',
  'http-auth-interceptor',
  'ui.bootstrap.carousel'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/events/:id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/talks/:id', {
        templateUrl: 'views/talk.html',
        controller: 'TalkCtrl'
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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // append API base path passed as a URL parameter
    $httpProvider.interceptors.push(function () {
      
      var getURLParameter = function (name, defaultValue) {
        var regex = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)');
        return decodeURIComponent((regex.exec(location.search) || [, '' ])[1].replace(/\+/g, '%20')) || defaultValue;
      };
      var apiBasePath = getURLParameter('apiBasePath', '/backend/api');

      return {
        request: function (config) {
          config.url = config.url.replace('API_BASE_PATH', apiBasePath);
          return config;
        }
      };
    });
  });
//  .run(function ($cookieStore, $rootScope, $http) {
//    if ($cookieStore.get('djangotoken')) {
//      $http.defaults.headers.common.Authorization = 'Token ' + $cookieStore.get('djangotoken');
//      //document.getElementById('main').style.display = 'block';
//    } else {
//      document.getElementById('login-holder').style.display = 'block';
//    }
//  });
