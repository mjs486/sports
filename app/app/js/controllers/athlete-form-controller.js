angular.module('sportsControllers')

.controller('AthleteFormCtrl',['$scope', '$routeParams', 'Team', 'Athlete',
	function($scope, $routeParams, Team, Athlete){
		$scope.athlete = Athlete.get({id: $routeParams.athleteId});
		$scope.teams = Team.query();
		$scope.notNew = true;
		$scope.get_team = function(){
			// When athlete get request returns...
			$scope.athlete.$promise.then(function(a){
				// When teams get requets returns..
				$scope.teams.$promise.then(function(t){

					// Generate team options for Form Select
					var teamOptions = []
					for (i =0; i < t.length; i++){
						teamOptions.push({name : t[i].city + '  ' + t[i].name,
											value : t[i].id});
					}
					// pre-fill form with athlete
					$scope.athleteForm = a;

					// define form fields to show
					$scope.athleteFormFields = [
				        {
				            key: 'first_name',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'First Name',
				                placeholder: 'Enter your first name',
				                required: false
				            }
				        },
				        {
				            key: 'last_name',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Last Name',
				                placeholder: 'Enter your last name',
				                required: false
				            }
				        },
				        {
					        key: 'team',
					        type: 'select',
					        defaultValue: a.team,
					        templateOptions: {
					            label: 'Team',
					            // valueProp : 'id',
					            // labelProp : 'name',
					            // Call our province service to get a list
					            // of provinces and territories
					            options: teamOptions
					        },
					    },  
				        {
				            key: 'number',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Number',
				                required: false
				            }
				        },
				        {
				            key: 'position',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Position',
				                placeholder: 'Position',
				                required: false
				            }
				        },
				        {
				            key: 'age',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Age',
				                placeholder: 'e.g. 25',
				                required: false
				            }
				        },
				        {
				            key: 'headline',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Headline',
				                placeholder: 'e.g. Had 3 sacks week 15 against Browns',
				                required: false
				            }
				        },
				        {
				            key: 'injury',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Injury',
				                placeholder: 'e.g. expecting week 17 return after strained hamstring',
				                required: false
				            }
				        },
				        {
				            key: 'img',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Image URL',
				                placeholder: 'http://....com/....jpg',
				                required: false
				            }
				        },
			    	];
			    }); // exit team request callback
				
			},
			// athlete request error callback
			function(error,status){
				window.location.href= '#/notfound/'

			}); //exit athlete request callback
		};

		$scope.get_team();
		
		$scope.submit = function(athlete){
			athlete.$update(athlete.id);
			window.location.href = '#/athlete/' + athlete.id + '/';
		}
		$scope.cancel = function(athlete){
			window.location.href = '#/athlete/' + athlete.id + '/';
		}
		$scope.delete = function(athlete){
			athlete.$remove(athlete.id);
			window.location.href = '#/team/' + athlete.team + '/';
		}
		
}]);