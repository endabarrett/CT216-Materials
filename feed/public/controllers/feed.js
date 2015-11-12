'use strict';

/* jshint -W098 */
angular.module('mean.feed').controller('FeedController', ['$scope', 'Global', 'Feed',
  function($scope, Global, Feed) {
    $scope.global = Global;
    $scope.package = {
      name: 'My News App'
    };
    $scope.loadButtonText="Load";
    $scope.loadFeed=function(e){        
        Feed.parseFeed($scope.feedSrc).then(function(res){
        $scope.loadButtonText=angular.element(e.target).text();
        $scope.feeds=res.data.responseData.feed.entries;
    });
    }
  }
]);
