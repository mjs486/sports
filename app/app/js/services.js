'use strict';

/* Services */

angular.module('sportsServices', ['ngResource'])

.factory('Sport', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/sport/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])

.factory('SportsTeams', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/sportsteams/:id/', {}, {
      query: {method:'GET',params:{id:'@id'}, isArray:false},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])

.factory('Team', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/team/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      stripTrailingSlashes: false
    });
  }])

.factory('Team', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/team/:id/', {}, {
      query: {method:'GET',params:{id:'@id'}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])

.factory('Athlete', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/athlete/:id/', {}, {
      query: {method:'GET', params:{id:'@id'}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT', params: {id: '@id'}},
      remove: {method:'DELETE', params: {id: '@id'}},
      stripTrailingSlashes: false
    });
  }])

.factory('NewAthlete', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/newathlete/', {}, {
      post: {method:'POST'},

      stripTrailingSlashes: false
    });
  }])

.factory('Athletes', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/athlete/?sport=:sportId', {}, {
      query: {method:'GET', params:{sportId:'@_sportId'}, isArray:true},
      stripTrailingSlashes: false
    });
  }])


.factory('Headliners', ['$resource',
  function($resource){
    return $resource('http://192.168.1.15:8001/sports/api/headliners/', {}, {
      query: {method:'GET',params:{}, isArray:true},
      stripTrailingSlashes: false
    });
  }]);
