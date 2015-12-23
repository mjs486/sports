'use strict';

/* App Module */

var sportsApp = angular.module('sportsApp', [
  'ngRoute',
  'sportsControllers',
  'sportsServices'
]);

sportsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sport', {
        templateUrl: 'templates/sport-list.html',
        controller: 'SportListCtrl'
      }).
      when('/sport/:sportId', {
        templateUrl: 'templates/sport-detail.html',
        controller: 'SportDetailCtrl'
      }).
      when('/team', {
        templateUrl: 'templates/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/team/:teamId', {
        templateUrl: 'templates/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/athlete', {
        templateUrl: 'templates/athlete-list.html',
        controller: 'AthleteListCtrl'
      }).
      when('/athlete/:ahtleteId', {
        templateUrl: 'templates/athlete-detail.html',
        controller: 'AthleteDetailCtrl'
      }).

      otherwise({
        redirectTo: '/sport'
      });
  }]);
