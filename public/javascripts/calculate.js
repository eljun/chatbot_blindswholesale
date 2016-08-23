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
		},
		{
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
		}
	];
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

