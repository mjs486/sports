angular.module('sportsControllers')

.controller('TeamListCtrl', ['$scope', 'Team',
  function($scope, Team) {
    
    $scope.teams =Team.query();
    $scope.orderProp = 'name';
  }])