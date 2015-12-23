'use strict';

/* Controllers */

var sportsControllers = angular.module('sportsControllers', []);

sportsControllers.controller('SportListCtrl', ['$scope', 'Sport',
  function($scope, Sport) {
    $scope.sports = Sport.query();
    $scope.orderProp = 'name';
  }]);

sportsControllers.controller('SportDetailCtrl', ['$scope', '$routeParams', 'Sport',
  function($scope, $routeParams, Sport) {
    $scope.sport = Sport.get({sportId: $routeParams.sportId}, function(sport) {
      $scope.sportsteams = sport.teams;
    });
  }]);

sportsControllers.controller('TeamListCtrl', ['$scope', 'Team',
  function($scope, Team) {
    $scope.teams = Team.query();
    $scope.orderProp = 'name';
  }]);

sportsControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({teamId: $routeParams.teamId}, function(team) {
      $scope.teamplayers = team.athletes;
    });
  }]);


sportsControllers.controller('AthleteListCtrl', ['$scope', 'Athlete',
  function($scope, Athlete) {
    $scope.athlete = Athlete.query();
    $scope.orderProp = 'name';
  }]);

sportsControllers.controller('AthleteDetailCtrl', ['$scope', '$routeParams', 'Athlete',
  function($scope, $routeParams, Athlete) {
    $scope.athlete = Athlete.get({AthleteId: $routeParams.AthleteId}, function(athlete) {
      $scope.team = athlete.team;
    });
  }]);

