'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
	'ngResource',
	'ui.router',
	'myApp.home',
	'myApp.view1',
	'myApp.view2',
	'myApp.nested',
	'myApp.filters',
	// 'myApp.services',
	// 'myApp.directives',
]);

myApp.run(['$rootScope', '$state', '$stateParams',
 function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

myApp.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/');
});

myApp.controller('mainController', function($scope){

});
