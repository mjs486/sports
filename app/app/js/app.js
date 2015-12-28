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
    $httpProvider.defaults.cache = true;

    $routeProvider.
      when('/sport/', {
        templateUrl: 'templates/sport-list.html',
        controller: 'SportListCtrl'
      }).
      when('/sport/new', {
        templateUrl: 'templates/new-sport-form.html',
        controller: 'NewSportFormCtrl'
      }).
      when('/sport/:sportId', {
        templateUrl: 'templates/sport-detail.html',
        controller: 'SportDetailCtrl'
      }).
      when('/sport/:sportId/edit', {
        templateUrl: 'templates/sport-form.html',
        controller: 'SportFormCtrl'
      }).
      when('/team/', {
        templateUrl: 'templates/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/team/new', {
        templateUrl: 'templates/new-team-form.html',
        controller: 'NewTeamFormCtrl'
      }).
      when('/team/:teamId', {
        templateUrl: 'templates/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/team/:teamId/edit', {
        templateUrl: 'templates/team-form.html',
        controller: 'TeamFormCtrl'
      }).
       when('/headlines/', {
        templateUrl: 'templates/athlete-list.html',
        controller: 'HeadlineAthleteListCtrl'
      }).
      when('/athlete/', {
        templateUrl: 'templates/athlete-list.html',
        controller: 'AthleteListCtrl'
      }).
      when('/athlete/new/', {
        templateUrl: 'templates/new-athlete-form.html',
        controller: 'NewAthleteFormCtrl'
      }).
      when('/athlete/:athleteId', {
        templateUrl: 'templates/athlete-detail.html',
        controller: 'AthleteDetailCtrl'
      }).
      when('/athlete/:athleteId/edit', {
        templateUrl: 'templates/athlete-form.html',
        controller: 'AthleteFormCtrl'
      }).
      when('/notfound', {
        templateUrl: 'templates/404.html',
        controller: 'NotFoundCtrl'
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'IndexCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      })
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