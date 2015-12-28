// GET PUT DELET individual sport instances

angular.module('sportsServices')

.factory('SportsTeams', ['$resource',
  function($resource){
    return $resource('/sports/api/sportsteams/:id/', {}, {
      query: {method:'GET',params:{id:'@id'}, isArray:false},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])