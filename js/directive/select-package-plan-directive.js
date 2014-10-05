Spoon.directive( 'selectPackagePlan', 
	[
		'safeApply',
		function directive( safeApply ){
			return {
				"scope": {
					"source": "@?"
				},
				"restrict": "A",
				"transclude": "true",
				"controller": "selectPackagePlanController",
				"templateUrl": "js/template/select-package-plan.html",
				"link": function link( scope, element, attribute ){
				}
			};
		}
	]);
/*
*/