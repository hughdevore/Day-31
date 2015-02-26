angular.module('app.controllers', ['app.services'])
.controller('MenuCtrl', function($scope, $state) {
	$scope.goMenu = function() {
		$state.go('menu');
	};
})
.controller('PlayCtrl', function($scope, $state) {
	$scope.goPlay = function() {
		$state.go('play');
	};
})
.controller('LeaderboardCtrl', function($scope, $state) {
	$scope.goLeaderboard = function() {
		$state.go('leaderboard');
	};
})
.controller('SettingsCtrl', function($scope, $state) {
	$scope.goSettings = function() {
		$state.go('settings');
	};
});