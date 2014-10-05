Spoon.directive('bookOnline', 
	[
		function directive( ){
			return {
				"scope": {
					"source": "@"
				},
				"restrict": "A",
				"controller": "bookController",

				"template": 
				"<section><button type='button' ng-click='setTab(1)'>Book Online</button>"+ 
					"<section select-package data='Data'></section>"+
				"</section>",
					
				"link": function link( scope, element, attribute ){
					
				}
			};
		}
	]);