funomania.controller("galleryCtrl", ['$scope', '$window', function($scope, $window) {
    'use strict';
    
    $scope.video = true;

    $scope.init = function () {
        $scope.events = JSON.parse($window.sessionStorage.getItem("events"));
	};

    $scope.showVideo = function() {
        $scope.video = true;
    };

    $scope.showImages = function(eventName) {
        $scope.video = false;
    };
}]);