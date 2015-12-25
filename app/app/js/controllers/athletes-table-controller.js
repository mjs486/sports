
// Table controller for the list of sports with sort and search
angular.module('sportsControllers')

.controller('AthletesTableCtrl',['$scope','filterFilter',
	function($scope,filterFilter){
		console.log($scope.team!=undefined);
		//Sports Table Variables
    	$scope.athletesTable = {}

    	$scope.athletesTable.search = {};

    	//Pagination Variables
    	$scope.athletesTable.viewby = 10;
    	$scope.athletesTable.currentPage = 1;
	    $scope.athletesTable.itemsPerPage = $scope.athletesTable.viewby;
	    $scope.athletesTable.maxSize = 5;
	    if ($scope.team != undefined){
	      $scope.team.$promise.then(
	      function(t){
	        $scope.athletesTable.totalItems = t.athletes.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	        $scope.athletes = t.athletes;
	      })
	    } else if ($scope.athletes != undefined){
	      $scope.athletes.$promise.then(
	      function(a){
	        $scope.athletesTable.totalItems = a.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	      })
	    };

    	$scope.athletesTable.setSelected = function(athlete) {
        	window.location.href = "#/athlete/"+ athlete.id;
    	};

    	$scope.athletesTable.setPage = function (pageNo) {
	      $scope.athletesTable.currentPage = pageNo;
	    };

	    $scope.athletesTable.setItemsPerPage = function(num) {
	      $scope.athletesTable.itemsPerPage = num;
	      $scope.athletesTable.currentPage = 1; //reset to first paghe
	    };
	    
	    $scope.athletesTable.updateSearch = function () {
		    $scope.athletesTable.filtered = filterFilter($scope.athletes, $scope.athletesTable.search);
	        $scope.athletesTable.totalItems = $scope.athletesTable.filtered.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	    };
	    $scope.athletesTable.resetFilters = function () {
	      // needs to be a function or it won't trigger a $watch
	      $scope.athletesTable.search = {};
	    };
	}]);