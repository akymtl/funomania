funomania.factory('HomeService', ['$http', function($http) {
    return {
        getAllEvents : function(){
            return $http.get("../../data/scores.json"); 
        },
        getTeamDetails : function(){
            return $http.get("../../data/teamDetails.json"); 
        }
    }
}]);