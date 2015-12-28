angular.module('sportsServices')

.factory('Sport', ['$resource',
  function($resource){
    return $resource('/sports/api/sport/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])