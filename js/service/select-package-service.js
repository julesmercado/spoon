Spoon.service('selectPackageService', 
	[
		function service(){
			var selectPackage= [ {
					name: "Executive Buffet Package",
					id: 1,
					description: "Long description of this package will go here",
					images: [],
			},{
					name: "Cocktail Package",
					id: 2,
					description: "Long description of this package will go here",
					images: [],
			},{
					name: "Wedding Package",
					id: 3,
					description: "Long description of this package will go here",
					images: [],
			},{
					name: "Budget Packed Package",
					id: 4,
					description: "Long description of this package will go here",
					images: [],
			} ]
			return {
					getSelectPackage: function getSelectPackage(){
						return selectPackage;
					}
				};
		}
	]);