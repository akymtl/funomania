funomania.controller("teamsCtrl", ['$scope', '$window', function($scope, $window) {
    $scope.teamsDetails = JSON.parse($window.sessionStorage.getItem("teamsDetails"));
    $scope.vTeam = $scope.teamsDetails[0];
    $scope.iTeam = $scope.teamsDetails[1];
    $scope.sTeam = $scope.teamsDetails[2];
    $scope.aTeam = $scope.teamsDetails[3];  
}]);