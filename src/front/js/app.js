'use strict';

var app = angular.module('UsersApp', []);

app.controller('DataCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get("http://jsonplaceholder.typicode.com/users")
	.then(function (response) {
		$scope.users       = response.data;
		$scope.sortType    = 'id';
		$scope.sortReverse = false;
	});
}]);
