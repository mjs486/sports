angular.module('sportsControllers')

.controller('SportDetailCtrl', ['$scope', '$routeParams', 'SportsTeams',
  function($scope, $routeParams, SportsTeams) {
    $scope.sport = SportsTeams.get({id: $routeParams.sportId})

    $scope.sport.$promise.then(function(sport){
      $scope.edit = function(){
        console.log(sport)
        window.location.href = "#/sport/" + sport.sport_id + "/edit/"
      };
    },function(error, status){
       window.location.href= '#/notfound/'
    });
  }]);