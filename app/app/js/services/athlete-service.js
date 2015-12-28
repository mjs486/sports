// GET PUT DELETE indivudual Athlete objects
angular.module('sportsServices', ['ngResource'])

.factory('Athlete', ['$resource',
  function($resource){
    return $resource('/sports/api/athlete/:id/', {}, {
      query: {method:'GET', params:{id:'@id'}, isArray:true},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])