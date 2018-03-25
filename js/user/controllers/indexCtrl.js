funomania.controller("indexCtrl", ['$rootScope', '$scope', '$location', '$cookies', function($rootScope, $scope, $location, $cookies) {
    $scope.findTeam = function() {
        $rootScope.alert = true;
        switch ($scope.empId%4) {
            case 0: return $location.path('/teams/valkyrie');
            case 1: return $location.path('/teams/illuminati');
            case 2: return $location.path('/teams/spartans');
            case 3: return $location.path('/teams/archadians'); 
        }
    }; 

    $scope.dropdown = function() {
        $rootScope.alert = false;
    }; 

    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'nav-active' : '';
    };   
}]);