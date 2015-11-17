'use strict';

angular.module('mean.basic').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('basic example page', {
      url: '/basic/example',
      templateUrl: 'basic/views/index.html'
    });
  }
]);
