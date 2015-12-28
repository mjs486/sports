angular.module('sportsServices')

.factory('NewAthlete', ['$resource',
  function($resource){
    return $resource('/sports/api/newathlete/', {}, {   
      post: {method:'POST'},
      stripTrailingSlashes: false
    });
}])