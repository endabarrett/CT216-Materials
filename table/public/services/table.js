'use strict';

angular.module('mean.basic').factory('Basic', [ '$http',
  function($http) {
    return {
      name: 'basic',
      parseData : function(url){
        var data = $http.get(url);          
        return data;
        }
    }
  }
]);
