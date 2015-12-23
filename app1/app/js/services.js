'use strict';

/* Services */

var sportsServices = angular.module('sportsServices', ['ngResource']);

sportsServices.factory('Sport', ['$resource',
  function($resource){
    return $resource('localhost:8001/sports/api/sport/', {}, {
      query: {method:'GET', params:{sportId:'sport'}, isArray:true}
    });
  }]);

sportsServices.factory('Team', ['$resource',
  function($resource){
    return $resource('localhost:8001/sports/api/team/', {}, {
      query: {method:'GET', params:{teamId:'team'}, isArray:true}
    });
  }]);


sportsServices.factory('Athlete', ['$resource',
  function($resource){
    return $resource('localhost:8001/sports/api/athlete/', {}, {
      query: {method:'GET', params:{athleteId:'athlete'}, isArray:true}
    });
  }]);

