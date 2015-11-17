'use strict';

/* jshint -W098 */
angular.module('mean.basic').controller('BasicController', ['$scope',  'Global', 'Basic', '$sanitize', '$http',
  function($scope, Global, Basic, $sanitize, $http) {
    $scope.global = Global;
    $scope.package = {
      name: 'basic'
    };
    $scope.loadButtonText = 'Load';
    $scope.loadFeed=function(e){        
        Basic.parseFeed($scope.url).then(function(res){
        $scope.loadButtonText=angular.element(e.target).text();
        $scope.retData=res.data;
    });
    }    
  }
]);
