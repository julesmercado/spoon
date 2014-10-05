Spoon.controller('bookingDetailsController', 
[
	'$scope',
	function bookController( $scope  ){
		$scope.tab = 1
		$scope.setTab = function setTab( tab ){
			$scope.tab = tab;
		};
		$scope.isSelected = function isSelected( isTab ){
			return scope.tab === isTtab;
		}
	}
]);