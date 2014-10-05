Spoon.service( 'selectPackagePlanService', 
	[
		function service(){
			var selectPackagePlan= [];
			
				Array.prototype.indexOfObject = function ( id ) {
				    for (var i = 0; i < this.length; i++) {
				        if ( this[i].id === id )
				            return i;
				    }
				};
			return {
					getSelectPackagePlan: function getSelectPackagePlan(){
						return selectPackagePlan;
					},
					setSelectPackagePlan: function setSelectPackagePlan( data ){
						if( selectPackagePlan.length>0 ){
							if( itemCheckId( data.id ) ){
								for( var index = 0 ; index < selectPackagePlan.length; index++ ){
									if( selectPackagePlan[ index ].id==data.id ){
										selectPackagePlan[ index ].quantity += 1;
										return selectPackagePlan;
									}
								}
							}else{
								data.quantity +=1;
								selectPackagePlan.push(data);
							}
							
						}else{
							data.quantity +=1;
							selectPackagePlan.push(data);
							console.log(data);
							return selectPackagePlan;
						}
					}
				}

			function itemCheckId( objId ){
				for( var index = 0 ; index < selectPackagePlan.length; index++ ){
					if( selectPackagePlan[ index ].id==objId ){
						return true;
					}
					
				}
				return false;
			}

			function itemCheck( objId ){
				for(var index = 0; index < selectPackagePlan.length; index++ ){
					if( selectPackagePlan[ index ].id==objId ){
						selectPackagePlan[ index ].quantity -= 1;
						return selectPackagePlan 
					}
				}

			}
		}
	]);