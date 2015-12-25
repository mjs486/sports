
// Table controller for the list of sports with sort and search
angular.module('sportsControllers')

.controller('SportsTableCtrl',['$scope','filterFilter',
	function($scope,filterFilter){

		//Sports Table Variables
    	$scope.sportsTable = {}

    	$scope.sportsTable.search = {};

    	//Pagination Variables
    	$scope.sportsTable.viewby = 10;
    	$scope.sportsTable.currentPage = 1;
	    $scope.sportsTable.itemsPerPage = $scope.viewby;
	    $scope.sportsTable.maxSize = 5;
	    if ($scope.sports != undefined){
	      $scope.sports.$promise.then(
	      function(s){
	        $scope.sportsTable.totalItems = s.length; 
	        $scope.sportsTable.numPages=Math.ceil($scope.sportsTable.totalItems/$scope.sportsTable.viewby);
	      })
	    };

    	$scope.sportsTable.setSelected = function(sport) {
        	window.location.href = "#/sport/"+ sport.sport_id;
    	};

    	$scope.sportsTable.setPage = function (pageNo) {
	      $scope.sportsTable.currentPage = pageNo;
	    };

	    $scope.sportsTable.setItemsPerPage = function(num) {
	      $scope.sportsTable.itemsPerPage = num;
	      $scope.sportsTable.currentPage = 1; //reset to first paghe
	    };
	    
	    $scope.updateSearch = function () {
	        $scope.sportsTable.filtered = filterFilter($scope.sports, $scope.sportsTable.search);
	        $scope.sportsTable.totalItems = s.length; 
	        $scope.sportsTable.numPages=Math.ceil($scope.sportsTable.totalItems/$scope.sportsTable.viewby);
	    };
	    $scope.resetFilters = function () {
	      // needs to be a function or it won't trigger a $watch
	      $scope.sportsTable.search = {};
	    };
	}]);