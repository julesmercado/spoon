Spoon.controller("selectPackageController", 
	[
		"$scope",
		'selectPackagePlanService',
		function bookingDetailsController( $scope, selectPackagePlanService ){
			
			$scope.selectPackage = function selectPackage( data ){
					selectPackagePlanService.setSelectPackagePlan( data );
			};	
		}
	]);
