funomania.controller("feedbackCtrl", ['$scope', '$timeout', 'FeedbackService', function($scope, $timeout, FeedbackService) {
    $scope.loader = true;
    $scope.success = false;
    $scope.feedback;
    
    $scope.init = function () {
        FeedbackService.getAllFeedback().then(function(response) {
            $scope.feedbacks = response.data;
            $scope.loader = false;
        });
	};
    
    $scope.submitFeedback = function () {        
        $scope.feedback = {
            name : '',
            comment : ''
        };
        $scope.success = true;
        $timeout(function () {
            $scope.success = false;
        }, 2000);
	};
}]);