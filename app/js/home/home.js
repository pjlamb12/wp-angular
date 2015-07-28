angular.module('myApp.home',
	['myApp',])
.config(function($stateProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'js/home/home.html',
			controller: 'HomeController',
			resolve: {
				home: function(Page) {
					return Page.get({page: 'home'});
				},
				menu: function(Menu) {
					return Menu.get({id: 2});
				}
			}
		});
})
.controller('HomeController', function($scope, home, menu, CustomPost){
	$scope.hello = "Hello!";

	$scope.home = home;

	$scope.menu = menu;
});