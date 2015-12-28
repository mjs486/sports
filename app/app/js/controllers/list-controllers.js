angular.module('sportsControllers')
.controller('SportListCtrl', ['$scope', 'Sport',
  function($scope, Sport) {
    $scope.sports=Sport.query();
    $scope.orderProp = 'name';
  }])
.controller('TeamListCtrl', ['$scope', 'Team',
  function($scope, Team) {
    
    $scope.teams =Team.query();
    $scope.orderProp = 'name';
  }])
.controller('AthleteListCtrl', ['$scope', 'Athletes', '$routeParams',
  function($scope, Athletes, $routeParams){
    $scope.athletes = Athletes.query({sportId:$routeParams.sport});
  }]);