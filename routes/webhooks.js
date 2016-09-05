/*
    Specifications:

    Customize quick quote implementation for blindswholesale.com.au
    using facebook messenger to feed dynamic data for easy and advanced
    shop experience.

    Project: Facebook messenger Chatbot
    Website: http://shoppingcart.blindswholesale.com.au
    Development: https://www.facebook.com/webriqdev
    github: https://github.com/eljun/chatbot_blindswholesale
    Developer: Eleazar Junsan
    App version: 1.0

    Tools:
        - Chatfuel app
        - Node environment
        - Express js

    FEATURES:
        - Dynamic data
        - Easy to maintain

    SOON:
        - Advanced filtering for user quries

 */

var request, express, router, calculate, product_pricing, product_listing;

request         = require('request'),
express         = require('express'),
router          = express.Router(),
calculate       = require('../public/javascripts/calculate'),
product_list    = require('../public/javascripts/product_list'),
product_pricing = calculate.productPricing(),
product_listing = product_list.productDefaultList();

// Common properties
baseUrl = "http://shoppingcart.blindswholesale.com.au/";

var ext = this;

router.get('/', function( req, res ) {

    var maxWidth, minWidth, maxHeight, minHeight, width, height, params;

    maxWidth  = 2800;
    maxHeight = 3400;
    width     = ext.numStrip(req.query.width);
    height    = ext.numStrip(req.query.height);
    params    = width + "-" + height;

    var text = "";

    // Filter the request here
    if ( ( width && height ) > ( maxWidth && maxHeight ) ) {
        res.status( 200 ).send( ext.invalidDimension() );

    }

    /*  Looping for our pricing table to match the query
        When match is found passed them to temp vars            */

    for( var i = 0; i < product_pricing.length; i++ ) {
        var item_dimension  = product_pricing[i].dimension;
        var data            = product_pricing[i].data;

        /*  Display appropriate result base on user queries
            We should response with json                        */
        if( item_dimension == params ) {
            text = data;
        }
    }

    /*  Only match items are being process
        Adding more cases won't be necessary at this moment     */

    switch( text ) {
        case text:
            res.status( 200 ).send( ext.recalc( text ));
            break;

        default:
            res.status( 200 ).send( ext.sendText() );
            break;
    }

});

exports.recalc = function( element ) {

    var arrayList    = [];

    /*  Making sure that we only accept objects
        Other properties can be filtered if necessary           */

    if( typeof( element ) == "object" ){

        /*  Match our secondary object to the result here
            If the match has been found then create new object  */

        for( var i = 0; i < element.length; i++ ){

            /*  Only when match query is found that we
                append additional product properties
                to the object this will save memory.            */

            var obj = {
                "buttons": [{
                    "type": "web_url",
                    "url": baseUrl +""+ element[i].url,
                    "title": "$" + element[i].price.toString(),
                },{
                    "type": "web_url",
                    "url": baseUrl +""+ element[i].url,
                    "title": "View Product",
                }]
            };

            /*  If true then return new object with
                addition properties push the new object
                to our new object array.                        */

            for( var b = 0; b < product_listing.length; b++ ) {
                if( element[i].url == product_listing[b].url ) {
                    obj.title     = product_listing[b].title;
                    obj.image_url = baseUrl + product_listing[b].image_url;
                    obj.subtitle  = product_listing[b].subtitle;
                }
            }
            arrayList.push( obj );
        }

    } else {
        // Don't remove this or perish
        return ext.sendText();
    }

    // Facebook generic message struture
    return [{
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": arrayList
            }
        }
    }];
};

// Send text for unvalidated dimension
exports.sendText = function() {
    return [{"text": "There seems to be a problem with your query please try again. Note: try to use 600 instead of 652.55 and etc.."}];
};

// Default incorrect dimension handler
exports.invalidDimension = function() {
    return [{"text": "Sorry dimension should be at least 600min - 3400max only.."}];
};

// Strip queries to only accept number
exports.numStrip = function( element ) {
    var data = element.replace(/\D/g, '');
    return Math.floor(data);
};

module.exports = router;