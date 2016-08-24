var deluxe        	= 104,
	standard        = 95,
	budget          = 104,
	roman           = 264,
	cedar           = 40,
	visionwood_50mm = 137,
	visionwood_63mm = 170,
	aluminium_25mm  = 78,
	aluminium_50mm  = 117;

exports.productPricing = function() {
	return [
		{
			"dimension": "600-600",
			"data": [
				{ "title": "budget-roller-blind"			, "price" : 11	},
				{ "title": "standard-roller-blind"			, "price" : 12	},
				{ "title": "deluxe-roller-blind"			, "price" : 13	},
				{ "title": "roman-blind"					, "price" : 14	},
				{ "title": "50mm-visionwood-venetian"		, "price" : 15	},
				{ "title": "63mm-visionwood-venetian-blind"	, "price" : 16	},
				{ "title": "cedar-venetian-blind"			, "price" : 17	},
				{ "title": "25mm-aluminium-venetian-blind"	, "price" : 18	},
				{ "title": "50mm-aluminium-venetian"		, "price" : 19	},
			]
		},{
			"dimension": "600-800",
			"data": [
				{ "title": "budget-roller-blind"			, "price" : 21	},
				{ "title": "standard-roller-blind"			, "price" : 22	},
				{ "title": "deluxe-roller-blind"			, "price" : 23	},
				{ "title": "roman-blind"					, "price" : 24	},
				{ "title": "50mm-visionwood-venetian"		, "price" : 25	},
				{ "title": "63mm-visionwood-venetian-blind"	, "price" : 26	},
				{ "title": "cedar-venetian-blind"			, "price" : 27	},
				{ "title": "25mm-aluminium-venetian-blind"	, "price" : 28	},
				{ "title": "50mm-aluminium-venetian"		, "price" : 29	},
			]
		},{
			"dimension": "600-1000",
			"data": [
				{ "title": "budget-roller-blind"			, "price" : 31	},
				{ "title": "standard-roller-blind"			, "price" : 32	},
				{ "title": "deluxe-roller-blind"			, "price" : 33	},
				{ "title": "roman-blind"					, "price" : 34	},
				{ "title": "50mm-visionwood-venetian"		, "price" : 35	},
				{ "title": "63mm-visionwood-venetian-blind"	, "price" : 36	},
				{ "title": "cedar-venetian-blind"			, "price" : 37	},
				{ "title": "25mm-aluminium-venetian-blind"	, "price" : 38	},
				{ "title": "50mm-aluminium-venetian"		, "price" : 39	},
			]
		},{
			"dimension": "600-1400",
			"data": [
				{ "title": "budget-roller-blind"			, "price" : 41	},
				{ "title": "standard-roller-blind"			, "price" : 42	},
				{ "title": "deluxe-roller-blind"			, "price" : 43	},
				{ "title": "roman-blind"					, "price" : 44	},
				{ "title": "50mm-visionwood-venetian"		, "price" : 45	},
				{ "title": "63mm-visionwood-venetian-blind"	, "price" : 46	},
				{ "title": "cedar-venetian-blind"			, "price" : 47	},
				{ "title": "25mm-aluminium-venetian-blind"	, "price" : 48	},
				{ "title": "50mm-aluminium-venetian"		, "price" : 49	},
			]
		}
	];
};


console.log( this.productPricing() );
exports.productList = function(){

	var list = {};

	for( var i = 0; i < this.productPricing().length: i++) {
		msg = [
	        {
	            "title": "Budget Range Roller Blind",
	            "image_url": baseUrl + "/resources/image/18/76/6.jpg",
	            "subtitle": "Budget Blockout is a 100% blockout fabric",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "budget-roller-blind",
	                "title": budget,
	            }]
	        },
	        {
	            "title": "Standard Roller Blind",
	            "image_url": baseUrl + "/resources/image/18/79/5.jpg",
	            "subtitle": "Woodlands is a smooth 1x1 plain weave made from 100% polyester yarn...",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "standard-roller-blind",
	                "title": standard,
	            }]
	        },
	        {
	            "title": "Deluxe Roller Blind",
	            "image_url": baseUrl + "/resources/image/18/76/7.jpg",
	            "subtitle": "White LFChalk LFDune LFQuarry LFLava LFWhite LFPearl LFPutty LFStraw",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "deluxe-roller-blind",
	                "title": deluxe,
	            }]
	        },
	        {
	            "title": "Roman Blind",
	            "image_url": baseUrl + "/resources/image/18/76/9.jpg",
	            "subtitle": "White BOPearl BOStraw BOPutty BODune BOLatte BOMocha BOPebble BOSeal..",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "roman-blind",
	                "title": roman,
	            }]
	        },
	        {
	            "title": "50mm Visionwood Venetian",
	            "image_url": baseUrl + "/resources/image/18/83/4.jpg",
	            "subtitle": "Blinds Wholesale 50mm Visionwood Venetians",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "50mm-visionwood-venetian",
	                "title": visionwood50,
	            }]
	        },
	        {
	            "title": "63mm Visionwood Venetian",
	            "image_url": baseUrl + "/resources/image/18/83/4.jpg",
	            "subtitle": "Our Visionwood Venetians are custom made ",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "63mm-visionwood-venetian-blind",
	                "title": visionwood63,
	            }]
	        },
	        {
	            "title": "Cedar Venetian Blind",
	            "image_url": baseUrl + "/resources/image/18/79/4.jpg",
	            "subtitle": "Our timber venetian blinds are classical and elegant.",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "cedar-venetian-blind",
	                "title": cedar,
	            }]
	        },
	        {
	            "title": "25mm Aluminium Venetian",
	            "image_url": baseUrl + "/resources/image/18/83/5.jpg",
	            "subtitle": "Blinds Wholesale offer the highest quality in Aluminium Venetians",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "25mm-aluminium-venetian-blind",
	                "title": aluminium25,
	            }]
	        },
	        {
	            "title": "50mm Aluminium Venetian",
	            "image_url": baseUrl + "/resources/image/18/82/f.jpg",
	            "subtitle": "Blinds Wholesale offer the highest quality in Aluminium Venetians",
	            "buttons": [{
	                "type": "web_url",
	                "url": baseUrl + "50mm-aluminium-venetian",
	                "title": aluminium50,
	            }]
	        }
	    ];
	}

};


exports.productDefaultList = function(){
	return [
		{
			"title" : "Budget Range Roller Blind",
			"thumbnail": "/resources/image/18/76/6.jpg",
			"description": "Budget Blockout is a 100% blockout fabric",
			"url": "budget-roller-blind",
			"price" : "90"
		},
		{
			"title" : "Standard Roller Blind",
			"thumbnail": "/resources/image/18/79/5.jpg",
			"description": "Woodlands is a smooth 1x1 plain weave made from 100% polyester yarn...",
			"url": "standard-roller-blind",
			"price" : "95"
		},
		{
			"title" : "Deluxe Roller Blind",
			"thumbnail": "/resources/image/18/76/7.jpg",
			"description": "White LFChalk LFDune LFQuarry LFLava LFWhite LFPearl LFPutty LFStraw",
			"url": "deluxe-roller-blind",
			"price" : "104"
		},
		{
			"title" : "Roman Blind",
			"thumbnail": "/resources/image/18/76/9.jpg",
			"description": "White BOPearl BOStraw BOPutty BODune BOLatte BOMocha BOPebble BOSeal..",
			"url": "roman-blind",
			"price" : "264"
		},
		{
			"title" : "50mm Visionwood Venetian",
			"thumbnail": "/resources/image/18/83/4.jpg",
			"description": "Blinds Wholesale 50mm Visionwood Venetians",
			"url": "50mm-visionwood-venetian",
			"price" : "137"
		},
		{
			"title" : "63mm Visionwood Venetian",
			"thumbnail": "/resources/image/18/83/4.jpg",
			"description": "Our Visionwood Venetians are custom made ",
			"url": "63mm-visionwood-venetian-blind",
			"price" : "170"
		},
		{
			"title" : "Cedar Venetian Blind",
			"thumbnail": "/resources/image/18/79/4.jpg",
			"description": "Our timber venetian blinds are classical and elegant.",
			"url": "cedar-venetian-blind",
			"price" : "40"
		},
		{
			"title" : "25mm Aluminium Venetian",
			"thumbnail": "/resources/image/18/83/5.jpg",
			"description": "Blinds Wholesale offer the highest quality in Aluminium Venetians",
			"url": "25mm-aluminium-venetian-blind",
			"price" : "78"
		},
		{
			"title" : "50mm Aluminium Venetian",
			"thumbnail": "/resources/image/18/82/f.jpg",
			"description": "Blinds Wholesale offer the highest quality in Aluminium Venetians",
			"url": "50mm-aluminium-venetian",
			"price" : "117"
		}
	];
};
