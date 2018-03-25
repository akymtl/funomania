funomania.controller("homeCtrl", ['$rootScope', '$scope', 'HomeService', '$window', '$timeout',  function($rootScope, $scope, HomeService, $window, $timeout) {
    $scope.loader = true;
    
    $scope.init = function () {
        HomeService.getAllEvents().then(function(response) {
            $window.sessionStorage.setItem("events", JSON.stringify(response.data));
        });
        HomeService.getTeamDetails().then(function(response) {
            $window.sessionStorage.setItem("teamsDetails", JSON.stringify(response.data));
        });
	};
    
    $timeout(function(){
        $scope.loader = false;
    }, 3000 );
}]);