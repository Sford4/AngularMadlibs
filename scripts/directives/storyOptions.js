angular.module('app.directives.storyOptions', [])
	.directive('storyOptions', function() {
	return {
		restrict: 'E',
		controller: function($scope) {
			console.log('controller');
		}
		scope: {
			randomNoun: '=',
			randomVerb: '=',
			randomAdj: '=',
			randomAdv: '=',
		}
		templateUrl: "templates/directives/storyOptions.html"
	};

	});
