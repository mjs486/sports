// GET POST PUT DELETE Teams
angular.module('sportsServices')

.factory('Team', ['$resource',
  function($resource){
    return $resource('/sports/api/team/:id/', {}, {
      query: {method:'GET',params:{id:'@id'}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])