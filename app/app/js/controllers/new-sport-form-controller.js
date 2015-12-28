angular.module('sportsControllers')

.controller('NewSportFormCtrl',['$scope', '$routeParams','Sport',
	function($scope, $routeParams, Sport){
		$scope.sport = (function(){
			var sport = new Sport();
			sport.name = ""
			sport.abbr = ""
			sport.sport_id=""
			return sport
		})();
		$scope.sportForm = $scope.sport;
		$scope.sportFormFields = [
			{
	            key: 'name',
	            type: 'input',
	            templateOptions: {
	                type: 'text',
	                label: 'Name',
	                placeholder: 'e.g. Baseball',
	                required: false
	            }
	        },
	        {
	            key: 'abbr',
	            type: 'input',
	            templateOptions: {
	                type: 'text',
	                label: 'Abbreviation',
	                placeholder: 'e.g. MLB',
	                required: false
	            }
	        },
	        {
	            key: 'sport_id',
	            type: 'input',
	            templateOptions: {
	                type: 'text',
	                label: 'id',
	                placeholder: 'e.g. baseball',
	                required: false
	            }
	        }
	    ];
	    $scope.submit = function(sport){
			sport.$post(sport.sport_id);
			window.location.href = '#/sport/';
		}
		$scope.cancel = function(team){
			window.location.href = '#/sport/';
		}

	}]);