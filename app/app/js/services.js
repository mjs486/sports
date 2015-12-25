'use strict';

/* Services */

angular.module('sportsServices', ['ngResource'])

.factory('Sport', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/sport/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('SportsTeams', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/sportsteams/:id', {}, {
      query: {method:'GET',params:{id:'@_id'}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('Team', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/team/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('Team', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/team/:id', {}, {
      query: {method:'GET',params:{id:'@_id'}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('Athlete', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/athlete/:id', {}, {
      query: {method:'GET', params:{id:'@_id'}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('Headliners', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/sports/api/headliners/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      stripTrailingSlashes: false
    });
  }]);