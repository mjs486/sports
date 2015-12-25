angular.module('sportsControllers', [])

.controller('IndexCtrl', ['$scope', 'Headliners','Team','Sport',
  function($scope, Headliners,Team,Sport) {
    $scope.athletes = Headliners.query();
    $scope.teams = Team.query();
    $scope.sports = Sport.query();
    $scope.athletesoOrderProp = 'name';
    $scope.teamsOrderProp = 'city';
    $scope.sportsOrderProp = 'name';

  }]);