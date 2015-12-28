angular.module('sportsControllers')
.controller('HeaderCtrl', ['$scope', 'Sport',
  function($scope, Sport) {
    $scope.sports=Sport.query();
  }])