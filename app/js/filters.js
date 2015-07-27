'use strict';

/* Filters */

angular.module('myApp.filters', [])
	.filter('html', ['$sce', function($sce) {
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter('shortUrl', [function() {
		return function(url) {
			if( url.indexOf('/wordpress') >= 0) {
				url = url.substr(url.indexOf('/wordpress') + 11, url.length);
				url = url.substr(0, url.length-1);
			}
			console.log(url);
			url = 'view1';
			return url;
		}
	}]);
