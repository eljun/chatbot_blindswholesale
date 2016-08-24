var request, express, router;

request   = require('request');
express   = require('express');
router    = express.Router();

// Our default file structure here
data_JSON = './public/json/data.json';

var calculate = require('../public/javascripts/calculate');
var product_pricing = calculate.productPricing();
var baseUrl = "http://shoppingcart.blindswholesale.com.au/";

router.get('/', function(req, res, next) {

    var maxWidth, minWidth, maxHeight, minHeight, width, height, dimension,  filename;

    maxWidth  = 2800;
    maxHeight = 3400;
    width     = numStrip(req.query.width);
    height    = numStrip(req.query.height);
    calculate = width + "-" + height;

    for( var i = 0; i < product_pricing.length; i++ ) {

        // level - 1
        console.log("passed level 1");

        var item_dimension  = product_pricing[i].dimension;
        var data            = product_pricing[i].data;

        if( item_dimension == calculate ) {

            switch( calculate ) {

                case "600-600":
                    res.send( recalc( data ));
                    break;

                case "600-800":
                    res.send( recalc( data ));
                    break;

                case "600-1000":
                    res.send( recalc( data ));
                    break;

                case "600-1400":
                    res.send( recalc( data ));
                    break;

                default:
                    console.log( "Impossible!" );
                    break;
            }
        } else if ( req.status === 0 ) {
            console.log("Failure!");
            res.send([{"text" : "Sorry there seems to be a problem with your request..."}]);
        }
    }
});

function recalc( element ) {

    var product_list = {};

    if( typeof( element ) == "object" ){
        for( var i = 0; i < element.length; i++ ){

            var title = element[i].title,
                price = element[i].price;

            var budget, standard, deluxe, roman, visionwood50, visionwood63, cedar, aluminium25, aluminium50;

            if( title == "budget-roller-blind" ) {
                budget = price.toString();
            }else if ( title == "standard-roller-blind") {
                standard = price.toString();
            }else if ( title == "deluxe-roller-blind") {
                deluxe = price.toString();
            }else if ( title == "roman-blind") {
                roman = price.toString();
            }else if ( title == "50mm-visionwood-venetian") {
                visionwood50 = price.toString();
            }else if ( title == "63mm-visionwood-venetian-blind") {
                visionwood63 = price.toString();
            }else if ( title == "cedar-venetian-blind") {
                cedar = price.toString();
            }else if ( title == "25mm-aluminium-venetian-blind") {
                aluminium25 = price.toString();
            }else if ( title == "50mm-aluminium-venetian") {
                aluminium50 = price.toString();
            } else {
                product_list = calculate.productDefaultList();
            }

            product_list = [{
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
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
                        ]
                    }
                }
            }];
        }
    } else {
        console.log("Sorry can't tell.");
    }
    return product_list;
}

function anotherQuote() {
    msg = [{
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Do another quote",
                        "subtitle": "Check for another product price range..",
                        "buttons": [{
                            "type": "show_block",
                            "url": "Quote",
                            "title": "Try again",
                        }]
                    }
                ]
            }
        }
    }];
    return msg;
}
// Default incorrect dimension handler
function invalidDimension() {
    msg = [{
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Opps",
                    "subtitle": "Sorry dimension should be 600-3000 only.",
                    "buttons": [{
                        "type": "show_block",
                        "block_name": "Quote",
                        "title": "Try again"
                    }]
                }]
            }
        }
    }];
    return msg;
}

// Strip queries to only accept number
function numStrip( element ) {
    var data = element.replace(/\D/g, '');
    return Math.floor(data);
}

module.exports = router;