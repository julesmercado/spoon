Spoon.directive('selectPackage', 
	[
		function directive(){
			return {
				"scope": {
					"data": "=",
				},
				"restrict": "A",
				"transclude": "true",
				"controller": "selectPackageController",
				"templateUrl": "js/template/select-package.html",
				"link": function link( scope, element, attribute ){

				}
			};
		}
	]);