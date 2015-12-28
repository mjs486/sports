angular.module('sportsControllers')
.controller('SportListCtrl', ['$scope', 'Sport',
  function($scope, Sport) {
    $scope.sports=Sport.query();
    $scope.orderProp = 'name';
  }])