funomania.factory('FeedbackService', ['$http', function($http) {
    return {
        getAllFeedback: function(){
            return $http.get("../../data/feedback.json"); 
        }
    }
}]);