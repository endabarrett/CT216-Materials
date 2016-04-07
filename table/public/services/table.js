'use strict';

angular.module('mean.table').factory('Table', [ '$http',
  function($http) {
    return {
      name: 'table',
      parseData : function(url){
        var data = $http.get(url);          
        return data;
        }
    }
  }
]);
