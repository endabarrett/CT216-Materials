'use strict';

/* jshint -W098 */
angular.module('mean.table').controller('TableController', ['$scope',  'Global', 'Table',
  function($scope, Global, Table) {
    $scope.global = Global;
    $scope.package = {
      name: 'table'
    };    
    $scope.loadData=function(e){        
        Table.parseData($scope.url).then(function(res){        
        $scope.retData=res.data;
    });
    }    
  }
]);
