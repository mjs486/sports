
// Table controller for the list of sports with sort and search
angular.module('sportsControllers')

.controller('TeamsTableCtrl',['$scope','filterFilter',
	function($scope,filterFilter){

		// inital ordering
		$scope.orderProp='city'


		//Sports Table Variables
    	$scope.teamsTable = {};
    	$scope.teamsTable.search = {};
    	$scope.teamsTable.viewby = 10;
    	$scope.teamsTable.currentPage = 1;
	    $scope.teamsTable.itemsPerPage = $scope.teamsTable.viewby;
	    $scope.teamsTable.maxSize = 5;

	    // if teams in scope are in an array
	    if ($scope.teams != undefined){
	      $scope.teams.$promise.then(
	      function(t){
	        $scope.teamsTable.totalItems = t.length; 
	        $scope.teamsTable.numPages=Math.ceil($scope.teamsTable.totalItems/$scope.teamsTable.viewby);
	      });
	    } 
	    // if teams in scope are nested in a sport object
	    else if ($scope.sport != undefined){
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
	    $scope.teamsTable.updateSort = function (val) {
		    $scope.teamsTable.filtered = $scope.teamsTable.filtered.sort(function(a,b){
		    	//allow for nested object reference such as "sport.team.name"
		    	var a1 = a;
		    	var b1 = b;
		    	for (i=0;i<val.split('.').length; i++){
				    a1 = a1[val.split('.')[i]];
				    b1 = b1[val.split('.')[i]];

				}
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
	    $scope.teamsTable.resetFilters = function () {
	      // needs to be a function or it won't trigger a $watch
	      $scope.teamsTable.search = {};
	    };
	    $scope.addTeam = function(){
	    	window.location.href="#/team/new"
	    };
	}
]);