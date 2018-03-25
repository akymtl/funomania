funomania.controller("eventsCtrl", ['$scope', '$window', function($scope, $window) {
    $scope.init = function () {
        $scope.events = JSON.parse($window.sessionStorage.getItem("events"));
	};      
}]);