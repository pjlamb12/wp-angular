angular.module('myApp.view1',
	['myApp',])
.config(function($stateProvider){
	$stateProvider
		.state('view1',{
			url: '/view1',
			templateUrl: 'js/view1/view1.html',
			controller: 'View1Controller'
		});
})
.controller('View1Controller', function($scope){
	$scope.hello = "Hello!";

	console.log("View 1 ");
});