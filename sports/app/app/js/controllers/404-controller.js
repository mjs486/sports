angular.module('sportsControllers')

.controller('NotFoundCtrl', ['$scope',
  function($scope){
  	$scope.returnHome = function(){
  		console.log('sup')
  		window.location.href='#'
  	};
}])