angular.module('sportsControllers')

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
  }]);