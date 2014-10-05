Spoon.service('bookingDetailsService', 
	[
		function service(){
			
			var executiveBuffetPackage={
						id: 1,
						name: "Executive Buffet Package",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						packages: [{
							firstPackage: {
								quantity: 0,
								price: 185,
								items:[
									"Chicken OR Pork Cuisine", 
									"Fish Cuisine",
									"Vegetables OR Salad Cuisine", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Rice Selection", 
									"Softdrinks OR Juice", 
									"Mineral Water Station" 
									]
							}
						},{
							secondPackage: {
								quantity: 0,
								price: 200,
								items:[
									"Beef OR Seafood Cuisine", 
									"Chicken OR Fish OR Pork Cuisine",
									"Vegetables OR Salad Cuisine", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Rice Selection", 
									"Softdrinks OR Juice", 
									"Mineral Water Station"
								]
							}
						},{
							thirdPackage:{
								quantity: 0,
								price: 220,
								items:[
									"Beef OR Seafood Cuisine", 
									"Chicken OR Pork Cuisine",
									"Fish Cuisine", 
									"Vegetables OR Salad Cuisine", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Rice Selection", 
									"Softdrinks OR Juice", 
									"Mineral Water Station"
								]
							}
						}]

				};
				var cocktailsPackage={
						id: 2,
						name: "Cocktails Package",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						packages: [{
							firstPackage: {
								quantity: 0,
								price: 160,
								items:[
									"(1st) Cocktails | Snacks", 
									"(2nd ) Cocktails | Snacks", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Softdrinks OR Juice", 
									"Peanuts, Candies & Choco Sticks Buffet", 
									"Mineral Water Station"
									]
							}
						},{
							secondPackage: {
								quantity: 0,
								price: 175,
								items:[
									"(1st) Cocktails | Snacks", 
									"(2nd ) Cocktails | Snacks", 
									"(3rd) Cocktails | Snacks", 
									"Pasta OR Pancit Cuisine",
									"Dessert Selection", 
									"Softdrinks OR Juice", 
									"Peanuts, Candies & Choco Sticks Buffet", 
									"Mineral Water Station", 
								]
							}
						}]			

				};

				var weddingPackage={
						id: 3,	
						name: "Wedding Package",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						packages: [{
							firstPackage: {
								quantity: 0,
								price: 310,
								items:[
									"Beef OR Seafood Cuisine", 
									"Chicken OR Pork Cuisine", 
									"Fish Cuisine", 
									"Vegetables OR Salad Cuisine", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Rice Selection",
									"Softdrinks OR Juice", 
									"Mineral Water Station"
								]
							}
						},{
							secondPackage: {
								quantity: 0,
								price: 340,
								items:[
									"Beef Cuisine", 
									"Seafood Cuisine", 
									"Chicken Cuisine", 
									"Fish OR Pork Cuisine", 
									"Vegetables OR Salad Cuisine", 
									"Pasta OR Pancit Cuisine", 
									"Dessert Selection", 
									"Rice Selection", 
									"Softdrinks OR Juice", 
									"Mineral Water Station" 
								]
							}
						}]
						
				};
				var budgetPackedPackage={
						id: 4, 
						name: "Budget Packed Package",
						quantity: 0,
						description: "Long description of this package will go here",
						images: [],
						packages: [{
							firstPackage: {
								quantity: 0,
								price: 85,
								items:[
									"Chicken OR Fish Cuisine", 
									"Pasta OR Pancit OR Vegetables OR Salad Cuisine", 
									"C2 Solo Juice OR 355 ML Bottled Water", 
									"Platinum Rice" 

								]
							}
						},{
							secondPackage: {
								quantity: 0,
								price: 95,
								items:[
									"Beef OR Seafood OR Pork Cuisine",
									"Pasta OR Pancit OR Vegetables OR Salad Cuisine", 
									"C2 Solo Juice OR 355 ML Bottled Water", 
									"Platinum Rice" 
								]
							}
						},{
							thirdPackage: {
								quantity: 0,
								price: 60,
								items:[
									"Cocktails | Snack Selection", 
									"2 Pcs. Chicken Lumpia -or- Crackers -or- Mini Cup Cake", 
									"C2 Solo Juice -or- 355 ML Bottled Water"  
								]
							}
						}]
						};

				return {
					getExecutiveBuffetPackage: function getExecutiveBuffetPackage(){
						return executiveBuffetPackage;
					},
					getCocktails: function getCocktails(){
						return cocktailsPackage;
					},
					getWedding: function getWedding(){
						return weddingPackage;
					},
					getBudgetPackedPackage: function getBudgetPackedPackage(){
						return budgetPackedPackage;
					}
				};
			
		}
	]);