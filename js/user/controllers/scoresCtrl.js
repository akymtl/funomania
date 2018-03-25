funomania.controller("scoresCtrl", ['$scope', '$window', function($scope, $window) {
    $scope.init = function () {
        $scope.scores = JSON.parse($window.sessionStorage.getItem("events"));
        $scope.calcScore($scope.scores);
	};
    
    $scope.calcScore = function(scores) {
        $scope.totalScore = {
            vtotal : 0,
            itotal : 0,
            stotal : 0,
            atotal : 0
        }
        for(var i = 0; i < scores.length; i++){
            $scope.totalScore.vtotal += scores[i].vScore;
            $scope.totalScore.itotal += scores[i].iScore;
            $scope.totalScore.stotal += scores[i].sScore;
            $scope.totalScore.atotal += scores[i].aScore;
        }
    };
}]);