//returns a random word from nouns array
(function(){
	angular.module('madLibs')
	.factory('DefaultWords', DefaultWords);

	function DefaultWords(){
		var nouns = [
			"muffin",
			"donkey",
			"flagpole",
			"gun",
			"follicle",
			"politician",
			"shoe",
			"pufferfish",
			"bowtie"
		]; 
		var verbs = [
			"yell",
			"smell",
			"kick",
			"interrogate",
			"cuddle",
			"vomit",
			"paint"
		];
		var = [
			"purple",
			"soft",
			"loveable",
			"silly",
			"infuriating",
			"fortuitous",
			"indefatigible"
		];
		var = [
			"slowly",
			"perfectly",
			"clumsily",
			"vertically",
			"posthumously",
			"calmly"
		];

		var service = {
			nouns: nouns,
			verbs: verbs
		};
		return service;
	}
})();

