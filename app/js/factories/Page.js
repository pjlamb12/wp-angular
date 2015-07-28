angular.module('myApp').factory('Page', ['$resource', function($resource){
	var PageResource = $resource('/wordpress/wp-json/pages/:page');

	return PageResource;
}])