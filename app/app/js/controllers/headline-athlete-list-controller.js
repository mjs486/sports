angular.module('sportsControllers')

.controller('HeadlineAthleteListCtrl', ['$scope', 'Athletes', '$routeParams',
  function($scope, Athletes, $routeParams){
    $scope.athletes = Athletes.query({sportId:$routeParams.sport, headline:true});
  }]);