angular.module('sportsControllers')

.controller('SportFormCtrl',['$scope', '$routeParams','SportsTeams',
	function($scope, $routeParams, SportsTeams){
		SportsTeams.get({id: $routeParams.sportId}).$promise.then(
			function(sport){
				console.log(sport)
				$scope.sport = sport
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
					sport.$update(sport.sport_id);
					window.location.href = '#/sport/' + sport.sport_id + '/';
				}
				$scope.cancel = function(sport){
					window.location.href = '#/sport/' + sport.sport_id + '/';
				}
				$scope.delete = function(sport){
					console.log('hey',sport.sport_id);
					sport.$remove({id : sport.sport_id});
					window.location.href = '#';
				}
			}, function(error,status){
				window.location.href = "#/notfound"
		})
	}]);