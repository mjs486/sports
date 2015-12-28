angular.module('sportsControllers')

.controller('NewTeamFormCtrl',['$scope', '$routeParams', 'Team','Sport',
	function($scope, $routeParams, Team, Sport){
		$scope.newTeam = function(){
			team= new Team();
			team.city="";
			team.name="";
			team.league="";
			team.abbr="";
			team.logo="";
			team.sport="";
			return team;
		}
		$scope.team = $scope.newTeam()
		Sport.query().$promise.then(
			function(sports){
				$scope.sports = sports
				$scope.sportOptions = [];
				for (i=0;i<$scope.sports.length;i++){
					$scope.sportOptions.push({name : $scope.sports[i].name,
										value : $scope.sports[i].sport_id});
				}
				$scope.team = team;
				$scope.teamForm = $scope.team;
				$scope.teamFormFields = [
					{
			            key: 'city',
			            type: 'input',
			            templateOptions: {
			                type: 'text',
			                label: 'City',
			                placeholder: 'e.g. New York',
			                required: false
			            }
			        },
			        {
			            key: 'name',
			            type: 'input',
			            templateOptions: {
			                type: 'text',
			                label: 'Name',
			                placeholder: 'e.g. Mets',
			                required: false
			            }
			        },
			        {
			            key: 'league',
			            type: 'input',
			            templateOptions: {
			                type: 'text',
			                label: 'League',
			                placeholder: 'e.g. NL',
			                required: false
			            }
			        },
			        {
			            key: 'abbr',
			            type: 'input',
			            templateOptions: {
			                type: 'text',
			                label: 'Abbreviate',
			                placeholder: 'e.g. NYM',
			                required: false
			            }
			        },
			        {
				        key: 'sport',
				        type: 'select',
				        defaultValue: $scope.team.sport,
				        templateOptions: {
				            label: 'Sport',
				            // valueProp : 'id',
				            // labelProp : 'name',
				            // Call our province service to get a list
				            // of provinces and territories
				            options: $scope.sportOptions
				        },
				    },
				    {
			            key: 'logo',
			            type: 'input',
			            templateOptions: {
			                type: 'text',
			                label: 'Logo URL',
			                placeholder: 'e.g. http://.....com/.....jpg',
			                required: false
			            }
					}];
					$scope.submit = function(team){
						team.$post(team.id);
						window.location.href = '#/sport/' + team.sport + '/';
					}
					$scope.cancel = function(team){
						window.location.href = '#';
					}
			},function(error,status){
				window.location.href="#/notfound"
			})
	}]);