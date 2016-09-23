angular.module('app.directives.inputBoxes', [])
	.directive('inputBoxes', function() {
	return {
		restrict: 'E',
		controller: function($scope) {
			console.log('controller');
		}
		templateUrl: "templates/directives/inputBoxes.html"
	};

	});
