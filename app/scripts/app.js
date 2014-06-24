'use strict';

angular.module('medistreamApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'fmt',
    'http-auth-interceptor',
    'ui.bootstrap.carousel',
    'ui.bootstrap.buttons'
  ])
  .config(function ($routeProvider, $httpProvider, $resourceProvider) {
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

    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // append API base path passed as a URL parameter
    $httpProvider.interceptors.push(function () {

      // retrieve the API base path
      var getURLParameter = function (name, defaultValue) {
        var regex = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)');
        return decodeURIComponent((regex.exec(location.search) || [, '' ])[1].replace(/\+/g, '%20')) || defaultValue;
      };
      var apiBasePath = getURLParameter('apiBasePath', '/backend/api');

      return {
        request: function (config) {

          // use the API base path for all requests with API_BASE_PATH token
          config.url = config.url.replace('API_BASE_PATH', apiBasePath);
          return config;
        }
      };
    });
  })
  .run(function ($rootScope, $cookieStore, $http, $route, $location) {

    // set auth token for future requests
    var username = $cookieStore.get('username');
    var token = $cookieStore.get('djangotoken');
    if (username && token) {
      $rootScope.user = {username: username};
      $http.defaults.headers.common.Authorization = 'Token ' + token;

      // don't show landing page if the user is already registered
      var path = $location.path();
      if (!path || path === '/') {
        $location.path('events');
      }
    }

    // authentication required
    $rootScope.$on('event:auth-loginRequired', function (event, data) {
      console.log('event:auth-loginRequired');

      // show login (l) or registration (r)
      $location.search('newUser', data.newUser ? 'true' : 'false');
      $rootScope.loginRequired = true;
    });

    // authentication confirmed
    $rootScope.$on('event:auth-loginConfirmed', function (event, response) {
      console.log('event:auth-loginConfirmed');

      // save auth
      $cookieStore.put('djangotoken', response.token);
      $cookieStore.put('username', response.username);
      $http.defaults.headers.common.Authorization = 'Token ' + response.token;
      $rootScope.user = {username: response.username};
      $location.search('newUser', null);

      // hide login
      $rootScope.loginRequired = false;
    });

    // logout
    $rootScope.$on('event:auth-loginCancelled', function () {
      console.log('event:auth-loginCancelled');

      // clean auth
      $cookieStore.remove('djangotoken');
      $cookieStore.remove('username');
      $http.defaults.headers.common.Authorization = undefined;
      $rootScope.user = null;
      $route.reload();
    });

    // hide login view when route changes.
    $rootScope.$on('$routeChangeStart', function (scope, next, current) {

      // hide if new view, not in login/registration or path changed
      if (!current || !current.$$route || typeof next.params.newUser === 'undefined' ||
        next.$$route.originalPath !== current.$$route.originalPath) {
        $rootScope.loginRequired = false;
      }
    });

    // setup fade animations
    $(window).scroll(function () {
      return $('.animate-in').not('.hidden').each(function (i, element) {
        if ($(element).offset().top + 80 < ($(window).height() + $(window).scrollTop())) {
          return $(element).removeClass('animate-in');
        }
      });
    });
  });