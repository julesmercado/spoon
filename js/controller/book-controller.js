Spoon.controller('bookController', 
[
	'$scope',
	'bookingDetailsService',
	function bookController( $scope, bookingDetailsService  ){
			$scope.setTab = function(num){
				$scope.tab = num;
			};
		$scope.Data = {
			executiveBuffetPackage: bookingDetailsService.getExecutiveBuffetPackage(),
			cocktailsPackage: 		bookingDetailsService.getCocktails(),
			weddingPackage: 		bookingDetailsService.getWedding(),
			getBudgetPackedPackage: bookingDetailsService.getBudgetPackedPackage()
		};
		
		
	}
]);
					