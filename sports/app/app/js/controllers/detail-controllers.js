'use strict';

/* Controllers */

angular.module('sportsControllers')

.controller('SportDetailCtrl', ['$scope', '$routeParams', 'SportsTeams', 'Headliners',
  function($scope, $routeParams, SportsTeams,Headliners) {
    $scope.sport = SportsTeams.get({id: $routeParams.sportId})

    $scope.sport.$promise.then(function(sport){
      $scope.edit = function(){
        console.log(sport)
        window.location.href = "#/sport/" + sport.sport_id + "/edit/"
      };
    },function(error, status){
       window.location.href= '#/notfound/'
    });
    $scope.athletes = Headliners.query(({sport:$routeParams.sportId}));
    
  }])

.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({id: $routeParams.teamId})
    $scope.team.$promise.then(function(data){},function(error, status){
       window.location.href= '#/notfound/'
    });
    $scope.players_per_page = 10;
    $scope.orderProp="first_name";
    $scope.edit = function(){
        window.location.href = "#/team/" + $scope.team.id + "/edit/"
    };
    $scope.editAthlete = function(athlete){
        window.location.href = "#/athlete/" + athlete.id + "/edit/"
    };
    $scope.addPlayer = function(){
        window.location.href = "#/athlete/new"
    };
  }])

.controller('AthleteDetailCtrl', ['$scope', '$routeParams', 'Athlete','Team',
  function($scope, $routeParams, Athlete, Team) {
    $scope.athlete = Athlete.get({id: $routeParams.athleteId})
    $scope.athlete.$promise.then(function(a){
      $scope.athleteTeam = Team.get({id: a.team})
    },function(error,status){
      window.location.href= '#/notfound/'
    });
    $scope.edit = function(){
        window.location.href = "#/athlete/" + $scope.athlete.id + "/edit/"
    };
    
  }]);

