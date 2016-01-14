'use strict';

/* jshint -W098 */
angular.module('mean.bootstrap', ['ngAnimate']);
angular.module('mean.bootstrap').controller('BootstrapController', ['$scope', 'Global', 'Bootstrap',
  function($scope, Global, Bootstrap) {
    $scope.global = Global;
    $scope.package = {
      name: 'bootstrap'
    };
  }
]);
