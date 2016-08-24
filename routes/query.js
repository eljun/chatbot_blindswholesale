var calculate = require('../public/javascripts/calculate');
var product_pricing = calculate.productPricing();
var i = 0;

for( var i; i < product_pricing.length; i++ ) {

	var dimension 		= product_pricing[i].dimension;
	var data   			= product_pricing[i].data;
	var calc      		= "600-1400";
	var product_name;

 	if( dimension == calc ) {
		switch( calc ) {
			case "600-600":
				recalc( data );
				break;
			case "600-800":
				recalc( data );
				break;
			case "600-1000":
				recalc( data );
				break;
			case "600-1400":
				recalc( data );
				break;
		}
	}

}

function recalc( element ) {

	var product_list = {};

	if( typeof( element ) == "object" ){

		console.log("Is Object");

		for( var i = 0; i < element.length; i++ ){

			var title = element[i].title,
				price = element[i].price;

			var budget, standard, deluxe, roman, visionwood50, visionwood63, cedar, aluminium25, aluminium50;

			if( title == "budget-roller-blind" ) {
				budget = price;
			}else if ( title == "standard-roller-blind") {
				standard = price;
			}else if ( title == "deluxe-roller-blind") {
				deluxe = price;
			}else if ( title == "roman-blind") {
				roman = price;
			}else if ( title == "50mm-visionwood-venetian") {
				visionwood50 = price;
			}else if ( title == "63mm-visionwood-venetian-blind") {
				visionwood63 = price;
			}else if ( title == "cedar-venetian-blind") {
				cedar = price;
			}else if ( title == "25mm-aluminium-venetian-blind") {
				aluminium25 = price;
			}else if ( title == "50mm-aluminium-venetian") {
				aluminium50 = price;
			} else {
				product_list = calculate.productDefaultList();
			}

			product_list = [
				{
					title : "Budget Range Roller Blind",
					thumbnail: "/resources/image/18/76/6.jpg",
					description: "Budget Blockout is a 100% blockout fabric",
					url: "budget-roller-blind",
					price : budget
				},
				{
					title : "Standard Roller Blind",
					thumbnail: "/resources/image/18/79/5.jpg",
					description: "Woodlands is a smooth 1x1 plain weave made from 100% polyester yarn...",
					url: "standard-roller-blind",
					price : standard
				},
				{
					title : "Deluxe Roller Blind",
					thumbnail: "/resources/image/18/76/7.jpg",
					description: "White LFChalk LFDune LFQuarry LFLava LFWhite LFPearl LFPutty LFStraw",
					url: "deluxe-roller-blind",
					price : deluxe
				},
				{
					title : "Roman Blind",
					thumbnail: "/resources/image/18/76/9.jpg",
					description: "White BOPearl BOStraw BOPutty BODune BOLatte BOMocha BOPebble BOSeal..",
					url: "roman-blind",
					price : roman
				},
				{
					title : "50mm Visionwood Venetian",
					thumbnail: "/resources/image/18/83/4.jpg",
					description: "Blinds Wholesale 50mm Visionwood Venetians",
					url: "50mm-visionwood-venetian",
					price : visionwood50
				},
				{
					title : "63mm Visionwood Venetian",
					thumbnail: "/resources/image/18/83/4.jpg",
					description: "Our Visionwood Venetians are custom made ",
					url: "63mm-visionwood-venetian-blind",
					price : visionwood63
				},
				{
					title : "Cedar Venetian Blind",
					thumbnail: "/resources/image/18/79/4.jpg",
					description: "Our timber venetian blinds are classical and elegant.",
					url: "cedar-venetian-blind",
					price : cedar
				},
				{
					title : "25mm Aluminium Venetian",
					thumbnail: "/resources/image/18/83/5.jpg",
					description: "Blinds Wholesale offer the highest quality in Aluminium Venetians",
					url: "25mm-aluminium-venetian-blind",
					price : aluminium25
				},
				{
					title : "50mm Aluminium Venetian",
					thumbnail: "/resources/image/18/82/f.jpg",
					description: "Blinds Wholesale offer the highest quality in Aluminium Venetians",
					url: "50mm-aluminium-venetian",
					price : aluminium50
				}
			];


		}
	} else {
		console.log("Sorry can't tell.");
	}
	console.log( product_list );
	return product_list;
}

