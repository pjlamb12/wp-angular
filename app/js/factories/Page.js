angular.module('myApp').factory('Page', ['$resource', function($resource){
	var PostResource = $resource('/wordpress/wp-json/pages/:page');

	return PostResource;
}])