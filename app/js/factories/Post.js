angular.module('myApp').factory('Post', ['$resource', function($resource){
	var PostResource = $resource('/wordpress/wp-json/posts/?slug=:slug');

	return PostResource;
}])