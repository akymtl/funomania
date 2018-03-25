var funomania = angular.module("funomania", ['ngRoute', 'ngCookies']);

funomania.config(function($httpProvider) {
			$httpProvider.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
			$httpProvider.defaults.headers.post['Data-Type'] = "json";
		});

// ----------------------CONFIGURING THE APPLICATION------------------------

funomania.config( [ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : '../../partials/home.html',
        controller: 'homeCtrl',
        css: '../../css/user/home.css'
	}).when('/events', {
		templateUrl : '../../partials/events.html',
        controller: 'eventsCtrl',
        css: 'css/user/events.css'
	}).when('/gallery', {
		templateUrl : '../../partials/gallery.html',
        controller: 'galleryCtrl',
        css: 'css/user/gallery.css'
	}).when('/feedback', {
		templateUrl : '../../partials/feedback.html',
        controller: 'feedbackCtrl',
        css: 'css/user/feedback.css'
	}).when('/scores', {
		templateUrl : '../../partials/scores.html',
        controller: 'scoresCtrl',
        css: 'css/user/scores.css'
	}).when('/teams/valkyrie', {
		templateUrl : '../../partials/teams/valkyrie.html',
        controller: 'teamsCtrl',
        css: 'css/user/teams.css'
	}).when('/teams/illuminati', {
		templateUrl : '../../partials/teams/illuminati.html',
        controller: 'teamsCtrl',
        css: 'css/user/teams.css'
	}).when('/teams/archadians', {
		templateUrl : '../../partials/teams/archadians.html',
        controller: 'teamsCtrl',
        css: 'css/user/teams.css'
	}).when('/teams/spartans', {
		templateUrl : '../../partials/teams/spartans.html',
        controller: 'teamsCtrl',
        css: 'css/user/teams.css'
	}).otherwise( {
		redirectTo : '/'
	});
} ]);