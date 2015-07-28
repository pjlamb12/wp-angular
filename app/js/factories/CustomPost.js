angular.module('myApp').factory('CustomPost', ['$resource', function($resource){
	var CustomPostResource = $resource('/wordpress/wp-json/posts/?type=:type');

	return CustomPostResource;
}]);

// Use .query({type: type});