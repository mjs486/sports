'use strict';

/* Controllers */

angular.module('sportsControllers')

.controller('SportDetailCtrl', ['$scope', '$routeParams', 'SportsTeams', 'Headliners',
  function($scope, $routeParams, SportsTeams,Headliners) {
    $scope.sport = SportsTeams.get({id: $routeParams.sportId});
    $scope.athletes = Headliners.query(({sport:$routeParams.sportId}));
  }])

.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({id: $routeParams.teamId});
    $scope.players_per_page = 10;
    $scope.orderProp="first_name";
  }])

.controller('AthleteDetailCtrl', ['$scope', '$routeParams', 'Athlete',
  function($scope, $routeParams, Athlete) {
    console.log($routeParams)
    $scope.athlete = Athlete.get({id: $routeParams.athleteId});
  }]);

