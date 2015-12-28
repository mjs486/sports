angular.module('sportsControllers', [])

.controller('IndexCtrl', ['$scope','Team','Sport',
  function($scope,Team,Sport) {
    // $scope.athletes = Headliners.query();
    $scope.teams = Team.query();
    $scope.sports = Sport.query();
    $scope.athletesoOrderProp = 'name';
    $scope.teamsOrderProp = 'city';
    // $scope.sportsOrderProp = 'name';

  }]);