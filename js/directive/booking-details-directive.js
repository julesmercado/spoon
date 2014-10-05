Spoon.directive('bookingDetails', 
	[
		function directive( ){
			return {
				
				"restrict": "A",
				"transclude": "true",
				"controller": "bookingDetailsController",
				"templateUrl": "js/template/booking-details.html",
				"link": function link( scope, element, attribute ){

				}
			};
		}
	]);