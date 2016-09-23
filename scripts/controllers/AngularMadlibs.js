angular.module('madLibs')
	.controller('GenerateLibs', function($scope, DefaultWords) {
		//local variables
		var vm = this;

		vm.nouns = DefaultWords.nouns; 

		vm.verbs = DefaultWords.verbs 

		vm.adjectives = DefaultWords.adjectives 

		vm.adverbs = DefaultWords.adverbs 

		//bound functions
		vm.makeWordArrays = makeWordArrays;
		vm.addNouns = addNouns; 
	    vm.addVerbs = addVerbs;
	    vm.addAdjs = addAdjs; 
	    vm.addAdvs = addAdvs; 
	    vm.completeNounArray = completeNounArray;
	    vm.completeVerbArray = completeVerbArray;
	    vm.completeAdjArray = completeAdjArray; 
	    vm.completeAdvArray = completeAdvArray;

		//bound values
		vm.userNouns = [];
		vm.userVerbs = [];
		vm.userAdjs = [];
		vm.userAdvs = [];
		vm.story = null;
		vm.generate = false;

		//bound function implementations

		function makeWordArrays() {
			console.log('makeWordArrays');
			vm.userNouns = [];
			vm.userVerbs = [];
			vm.userAdjs = [];
			vm.userAdvs = [];
			addNouns(); 
		    addVerbs();
		    addAdjs(); 
		    addAdvs(); 
		    completeNounArray();
		    completeVerbArray();
		    completeAdjArray(); 
		    completeAdvArray();
		    vm.generate = true;
		}

		function addNouns(){
			if(vm.noun){
				for(var i = 0; i < vm.noun.length; i++){
					vm.userNouns.push(vm.noun[i]);
				}
			}
			else{
				vm.noun = [];
			}
			
	    }

	    function addVerbs(){
	        if(vm.verb){
				for(var i = 0; i < vm.verb.length; i++){
					vm.userVerbs.push(vm.verb[i]);
				}
			}
			else{
				vm.verb = [];
			}
	    }

	    function addAdjs(){
	        if(vm.adj){
				for(var i = 0; i < vm.adj.length; i++){
					vm.userAdjs.push(vm.adj[i]);
				}
			}
			else{
				vm.adj = [];
			}
	    }

	    function addAdvs() {
	        if(vm.adv){
				for(var i = 0; i < vm.adv.length; i++){
					vm.userAdvs.push(vm.adv[i]);
				}
			}
			else{
				vm.adv = [];
			}
	    }

	    function completeNounArray(){
	    	while(vm.userNouns.length < 6){
	    		vm.userNouns.push(vm.nouns[Math.floor(Math.random() * vm.nouns.length)]);
	    	}
	    	
	    }
	    function completeVerbArray(){
	    	while(vm.userVerbs.length < 6){
	    		vm.userVerbs.push(vm.verbs[Math.floor(Math.random() * vm.verbs.length)]);
	    	}
	    }
	    function completeAdjArray(){
	    	while(vm.userAdjs.length < 6){
	    		vm.userAdjs.push(vm.adjectives[Math.floor(Math.random() * vm.adjectives.length)]);
	    	}
	    }
	    function completeAdvArray(){
	    	while(vm.userAdvs.length < 6){
	    		vm.userAdvs.push(vm.adverbs[Math.floor(Math.random() * vm.adverbs.length)]);
	    	}
	    }

		//utility functions
		function capitalize(word){
			//do a thing and return it
		}

		

		

		
	    

	    //run a function that randomizes, call the function in the HTML
	    




	});



































