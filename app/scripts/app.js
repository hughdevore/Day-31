angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('menu', {
		url:"/menu",
		templateUrl: "templates/menu.html",
		controller: "MenuCtrl"
	})
	.state('play', {
		url:"/play",
		templateUrl: "templates/play.html",
		controller: "PlayCtrl"
	})
	.state('leaderboard', {
		url:"/leaderboard",
		templateUrl: "templates/leaderboard.html",
		controller: "LeaderboardCtrl"
	})
	.state('settings', {
		url:"/settings",
		templateUrl: "templates/settings.html",
		controller: "SettingsCtrl"
	});

	$urlRouterProvider.otherwise("/menu");
});