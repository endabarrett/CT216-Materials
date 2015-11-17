'use strict';

angular.module('mean.basic').factory('Basic', [ '$http', '$log',
  function($http, $log) {
    return {
      name: 'basic',    
      parseFeed : function(url){
          var data = $http.get(url); 
		  $log.log(data);	// Log the data for debug purposes
          return data;
        }
    };
  }
]);
