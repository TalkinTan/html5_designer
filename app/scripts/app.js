'use strict';

var app = angular.module('UIRouter', ['ui.router']);

app.controller('ContactsController', ['$scope', function($scope) {
	$scope.contacts = [
		{name: 'juntao', address: 'Jinye 1st Rd'},
		{name: 'abruzzi', address: 'Keji 2nd Rd'},
		{name: 'mansi', address: 'Zhangba 4th Rd'},
	];

	$scope.selectItem = function(selectedItem) {
		$scope.contacts.forEach(function(item) {
			item.selected = false;
			if(selectedItem === item) {
				selectedItem.selected = true;
			}
		});
	};
}]);

app.config(function($stateProvider) {
	$stateProvider
		.state('wx_modules', {
			url: '/wx_modules',
			templateUrl: 'views/wx_modules.html'
		})
		.state('contacts', {
			url: '/contacts',
			templateUrl: 'views/contacts.html',
			controller: 'ContactsController'
		})
		.state('contacts.contact', {
			url: '/:contact',
			templateUrl: 'views/contacts.contact.html',
			controller: function($scope, $stateParams) {
				$scope.contact = $stateParams.contact;
			}
		});
});

