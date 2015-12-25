'use strict';

/* App Module */

var sportsApp = angular.module('sportsApp', [
  'ngRoute',
  'ngCookies',
  'sportsControllers',
  'sportsServices',
  'ngResource',
  'ui.bootstrap',
  'formly',
  'formlyBootstrap',
]);

sportsApp.config(['$routeProvider','$httpProvider','$resourceProvider',
  function($routeProvider,$httpProvider,$resourceProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider.
      when('/sport/', {
        templateUrl: 'templates/sport-list.html',
        controller: 'SportListCtrl'
      }).
      when('/sport/:sportId', {
        templateUrl: 'templates/sport-detail.html',
        controller: 'SportDetailCtrl'
      }).
      when('/team/', {
        templateUrl: 'templates/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/team/:teamId', {
        templateUrl: 'templates/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/athlete/', {
        templateUrl: 'templates/athlete-list.html',
        controller: 'AthleteListCtrl'
      }).
      when('/athlete/:athleteId', {
        templateUrl: 'templates/athlete-detail.html',
        controller: 'AthleteDetailCtrl'
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'IndexCtrl'
      }).

      otherwise({
        redirectTo: '/home'
      });
  }]);
sportsApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});