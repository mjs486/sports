angular.module('sportsServices')

.factory('Athletes', ['$resource',
    function($resource){
	    return $resource('/sports/api/athlete/:id/', {}, {
	      query: {method:'GET', params:{id:'@id'}, isArray:true},
	      post: {method:'POST'},
	      update: {method:'PUT', params: {id: '@id'}},
	      remove: {method:'DELETE', params: {id: '@id'}},
	      stripTrailingSlashes: false
	});
}])