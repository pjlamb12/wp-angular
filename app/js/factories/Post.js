angular.module('myApp').factory('Post', ['$resource', function($resource){
	var PostResource = $resource('/wordpress/wp-json/posts/:id', {_id: "@id"});

	return PostResource;
}])