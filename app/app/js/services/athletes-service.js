angular.module('sportsServices')

.factory('Athletes', ['$resource',
  function($resource){
    return $resource('/sports/api/athlete/?sport=:sportId&headline=:headline', {}, {
      query: {method:'GET', params:{sportId:'@sportId',headline : '@headline'}, isArray:true},
      stripTrailingSlashes: false
    });
  }])