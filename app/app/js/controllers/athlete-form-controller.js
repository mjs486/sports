angular.module('sportsControllers')

.controller('AthleteFormCtrl',['$scope', 'Team',
	function($scope, Team){
		// Team.query().$promise
		// .then(function(res){
		// 	$scope.teams = []
		// 	for (i = 0; i < res.length; i++){
		// 		$scope.teams.push({'name' : (res[i].city + ' ' + res[i].name),
		// 							'value' : res[i].id})
		// 	}
		// 	return $scope.teams
		// });
		$scope.teams = Team.query()
		$scope.get_team = function(){
			$scope.athlete.$promise.then(function(a){
				$scope.teams.$promise.then(function(t){
					console.log(a);
					console.log(t);
					$scope.athleteFormFields = [
				        {
				            key: 'first_name',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'First Name',
				                placeholder: 'Enter your first name',
				                required: true
				            }
				        },
				        {
				            key: 'last_name',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Last Name',
				                placeholder: 'Enter your last name',
				                required: true
				            }
				        },
				        {
					        key: 'team',
					        type: 'select',
					        defaultValue: a.team.id,
					        templateOptions: {
					        	valueProp: 'id',
					        	labelProp: "name",
					            label: 'Team',
					            // Call our province service to get a list
					            // of provinces and territories
					            options: $scope.teams
					        },
					    },  
				        {
				            key: 'number',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Number',
				                placeholder: '#',
				                required: true
				            }
				        },
				        {
				            key: 'position',
				            type: 'input',
				            templateOptions: {
				                type: 'text',
				                label: 'Position',
				                placeholder: 'Position',
				                required: true
				            }
				        },
			    	];
			    });
			});
};
		$scope.get_team()

		$scope.athleteForm = {team : $scope.athlete.team};
		 

		 
  //   	first_name = models.CharField(max_length=30)
		// last_name = models.CharField(max_length=30)
		// number = models.CharField(max_length=10)
		// team = models.ForeignKey(Team, related_name='athletes')
		// position = models.CharField(max_length=30)
		// age = models.CharField(max_length=10)
		// headline = models.CharField(max_length=200)
		// injury = models.CharField(max_length=200)
		// img = models.URLField(max_length=200)
	 //    	console.log($scope);
	}]);