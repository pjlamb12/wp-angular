angular.module('myApp').factory('Menu', ['$resource', function($resource){
	var PostResource = $resource('/wordpress/wp-json/menus/:id', {_id: "@id"});

	return PostResource;
}])