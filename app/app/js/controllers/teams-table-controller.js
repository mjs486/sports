
// Table controller for the list of sports with sort and search
angular.module('sportsControllers')

.controller('TeamsTableCtrl',['$scope','filterFilter',
	function($scope,filterFilter){
		//Sports Table Variables
    	$scope.teamsTable = {};

    	$scope.teamsTable.search = {};

    	//Pagination Variables
    	$scope.teamsTable.viewby = 10;
    	$scope.teamsTable.currentPage = 1;
	    $scope.teamsTable.itemsPerPage = $scope.teamsTable.viewby;
	    $scope.teamsTable.maxSize = 5;

	    if ($scope.teams != undefined){
	      $scope.teams.$promise.then(
	      function(t){
	        $scope.teamsTable.totalItems = t.length; 
	        $scope.teamsTable.numPages=Math.ceil($scope.teamsTable.totalItems/$scope.teamsTable.viewby);
	      });
	    } else if ($scope.sport != undefined){
	      $scope.sport.$promise.then(
	      	function(s){
	        $scope.teamsTable.totalItems = s.teams.length; 
	        $scope.teamsTable.numPages=Math.ceil($scope.teamsTable.totalItems/$scope.teamsTable.viewby);
	        $scope.teams = s.teams
	      	});
	    }
	    

    	$scope.teamsTable.setSelected = function(team) {
    		console.log(team);
        	window.location.href = "#/team/"+ team.id;
    	};

    	$scope.teamsTable.setPage = function (pageNo) {
	      $scope.teamsTable.currentPage = pageNo;
	    };

	    $scope.teamsTable.setItemsPerPage = function(num) {
	      $scope.teamsTable.itemsPerPage = num;
	      $scope.teamsTable.currentPage = 1; //reset to first paghe
	    };
	    
	    $scope.teamsTable.updateSearch = function () {
	    	$scope.teamsTable.filtered = filterFilter($scope.teams, $scope.teamsTable.search);
	        $scope.teamsTable.totalItems = $scope.teamsTable.filtered.length; 
	        $scope.teamsTable.numPages=Math.ceil($scope.teamsTable.totalItems/$scope.teamsTable.viewby);
	    };
	    $scope.teamsTable.resetFilters = function () {
	      // needs to be a function or it won't trigger a $watch
	      $scope.teamsTable.search = {};
	    };
	}
]);