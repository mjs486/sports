angular.module('sportsControllers')

.controller('AthleteListCtrl', ['$scope', 'Athletes', '$routeParams',
  function($scope, Athletes, $routeParams){
    $scope.athletes = Athletes.query({sportId:$routeParams.sport, headline:false});
  }])