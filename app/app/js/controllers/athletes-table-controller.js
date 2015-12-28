
// Table controller for the list of sports with sort and search
angular.module('sportsControllers')

.controller('AthletesTableCtrl',['$scope','filterFilter',
	function($scope,filterFilter){
		
		// initial sorting order
		$scope.orderProp = 'first_name'

		// table for filtering/sorting/pagination
		// search params, pagesize, currentpage,
		// pagination bar size, total items, num pages
    	$scope.athletesTable = {}
    	$scope.athletesTable.search = {};
    	$scope.athletesTable.viewby = 10;
    	$scope.athletesTable.currentPage = 1;
	    $scope.athletesTable.itemsPerPage = $scope.athletesTable.viewby;
	    $scope.athletesTable.maxSize = 5;

	    //If athletes in scope are nested in a team obejcts : team = {...,athletes:[a1,...,aN],...}
	    if ($scope.team != undefined){
	      $scope.team.$promise.then(
	      function(t){
	        $scope.athletesTable.totalItems = t.athletes.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	        $scope.athletes = t.athletes;
	      })
	    } 
	    // If athletes in scope are on there own in a standalone list
	    else if ($scope.athletes != undefined){
	      $scope.athletes.$promise.then(
	      function(a){
	        $scope.athletesTable.totalItems = a.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	      })
	    };

	    // on table row click function
    	$scope.athletesTable.setSelected = function(athlete) {
        	window.location.href = "#/athlete/"+ athlete.id;
    	};

    	$scope.athletesTable.setPage = function (pageNo) {
	      $scope.athletesTable.currentPage = pageNo;
	    };

	    $scope.athletesTable.setItemsPerPage = function(num) {
	      $scope.athletesTable.itemsPerPage = num;
	      $scope.athletesTable.currentPage = 1; //reset to first page
	    };
	    
	    // On change in search field re-filter results
	    $scope.athletesTable.updateSearch = function () {
		    $scope.athletesTable.filtered = filterFilter($scope.athletes, $scope.athletesTable.search);
	        $scope.athletesTable.totalItems = $scope.athletesTable.filtered.length; 
	        $scope.athletesTable.numPages=Math.ceil($scope.athletesTable.totalItems/$scope.athletesTable.viewby);
	    };

	    //Sort results based on field

	    $scope.athletesTable.updateSort = function (val) {
		    $scope.athletesTable.filtered = $scope.athletesTable.filtered.sort(function(a,b){
		    	//Allow for nested object notation as "athlete.team.id"
		    	var a1 = a;
		    	var b1 = b;
		    	for (i=0;i<val.split('.').length; i++){
				    a1 = a1[val.split('.')[i]];
				    b1 = b1[val.split('.')[i]];

				}
				//If integer comparisons
		    	if(a1 === ''+parseInt(a1) && b1 === ''+parseInt(b1)){
		    		return parseInt(a1)-parseInt(b1);
		    	}
		    	if (a1 > b1){
		    		return 1;
		    	}
		    	if (a1 == b1){
		    		return 0;
		    	}
		    	if (a1 < b1){
		    		return -1;
		    	}
		    })
	    };
	    
	    $scope.athletesTable.resetFilters = function () {
	      // needs to be a function or it won't trigger a $watch
	      $scope.athletesTable.search = {};
	    };
	    $scope.addPlayer = function(){
	    	window.location.href="#/athlete/new"
	    };
	}]);