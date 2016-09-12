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

var fs, request, express, router, product_listing, filteringItems, all_blinds;

fs  = require('fs'),
request         = require('request'),
express         = require('express'),
router          = express.Router(),
product_list    = require('../public/javascripts/product_list'),
filteringItems  = require('../public/javascripts/test'),
product_listing = product_list.productDefaultList();
// all_blinds      = filteringItems.mergeBlinds();

var allFilesHere;
var pricingGrids = require('../public/javascripts/pricingGrid');
all_blinds      = pricingGrids.pricingGrid();


// Common properties
baseUrl = "http://shoppingcart.blindswholesale.com.au/";
var ext = this;

router.get('/', function( req, res ) {

    var width, height;

    width     = ext.numStrip(req.query.width);
    height    = ext.numStrip(req.query.height);

    var item_list = [];
    var arrayList  = [];
    var product_name;

    /*  Looping all our blinds products and filter it
        base on the dimension provided                  */

    for (var i = 0; i < all_blinds.length; i++) {

        /*  All our blinds pricing table are merge into one
            so we can easily loop over all the items    */

        var product_name = all_blinds[i];
        var filterWidth, filterHeight, productList;

        /*  Only match items are being process
        Adding more cases won't be necessary at this moment     */

        var minWidth, maxWidth, minHeight, maxHeight;
            minWidth = parseInt( product_name.width[0].min);
            maxWidth = parseInt( product_name.width[0].max);
            minHeight = parseInt( product_name.height[0].min);
            maxHeight = parseInt( product_name.height[0].max);

        /*  Only items that matches the min & max
            requirements are being process here                 */

        if (( width >= minWidth) && ( width <= maxWidth) &&
            ( height >= minHeight) && ( height <= maxHeight)) {
            // product_name = product_name;

                if( typeof product_name == "object") {

                var p_n, p_t, productPrice, prev, hprev, width_i, height_i;
                    productPrice;
                    p_n = product_name.name;
                    p_t = product_name.priceTable;
                    prev = 0;
                    hprev = 0;
                    width_i = 0;
                    height_i = 0;

                /*  Filter our width base on dimension
                    if not found then search for next object        */

                for (; width_i < p_t.length;) {
                    if ( width < p_t[width_i].width) {
                        if (prev > 0) {
                            filterWidth = prev;
                        } else {
                            filterWidth = p_t[width_i].width;
                        }
                        break;
                    } else {
                        if ( width == product_name.width['max']) {
                            filterWidth = p_t[width_i].width;
                        }
                    }
                    prev = p_t[width_i].width;
                    width_i++;
                    if (width_i == p_t) {
                        filterWidth = p_t[width_i].width;
                    }
                }

                p_t.forEach(function(id, properties) {
                    if (id.width == filterWidth) {
                        for (; height_i < id.height.length;) {
                            if ( height < Object.keys(id.height[height_i])) {
                                if (hprev > 0) {
                                    filterHeight = hprev;
                                } else {
                                    filterHeight = Object.keys(id.height[height_i]);
                                    productList = p_n;
                                }
                                break;
                            } else {
                                if ( height == product_name.height['max']) {
                                    filterHeight = Object.keys(id.height[height_i]);
                                    productList = p_n;
                                }
                            }

                            hprev = Object.keys(id.height[height_i]);
                            productList = p_n;
                            productPrice = id.height[height_i][hprev];
                            height_i++;

                            if (height_i == Object.keys(id.height[height_i])) {
                                filterHeight = p_t[id];
                            }
                        }
                    }
                })

                var new_data = {
                    "url": productList,
                    "price": productPrice
                }
                new_obj = new_data;
                item_list.push( new_obj );
            }
        }
    }

    for( var q = 0; q < item_list.length; q++ ) {

        /*  Only when match query is found that we
            append additional product properties
            to the object this will save memory.            */

        var obj = {
            "buttons": [{
                "type": "web_url",
                "url": baseUrl +""+ item_list[q].url,
                "title": "$" + item_list[q].price,
            },{
                "type": "web_url",
                "url": baseUrl +""+ item_list[q].url,
                "title": "View Product",
            }]
        };

        /*  If true then return new object with
            addition properties push the new object
            to our new object array.                        */

        for( var b = 0; b < product_listing.length; b++ ) {
            if( item_list[q].url == product_listing[b].url ) {
                obj.title     = product_listing[b].title;
                obj.image_url = baseUrl + product_listing[b].image_url;
                obj.subtitle  = product_listing[b].subtitle;
            }
        }

        arrayList.push( obj );
    }

    // Facebook generic message struture
    var json = [{
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": arrayList
            }
        }
    }];

    console.log( json );
    // Send our items
    res.status( 200 ).send( json );

});

// Send text for unvalidated dimension
exports.sendText = function() {
    return [{"text": "There seems to be a problem with your query please try again. Note: try to use 600 instead of 652.55 and etc.."}];
};

// Default incorrect dimension handler
exports.invalidDimension = function() {
    return [{"text": "Sorry dimension should be at least 001min - 3000max only.."}];
};

// Strip queries to only accept number
exports.numStrip = function( element ) {
    var data = element.replace(/\D/g, '');
    return Math.floor(data);
};

module.exports = router;

