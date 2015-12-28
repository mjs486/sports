angular.module('sportsControllers')

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