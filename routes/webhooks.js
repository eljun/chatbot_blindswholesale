var request = require('request');
var express = require('express');
var router = express.Router();
var fs = require('fs');
// var json    = ('./public/json/data.json');

// var token = "EAAKa7H7IXpABAB55ldmBqb08eq40RMvXZBlLw4Y6pQ95S33EDHUUMRdXaVVpWZBRmuvpZAs1ZBhE45wFZCt4aXezCofZCMV9JW0UzQ1bHs1ZCSwth0jmO1u8txEZB6C0jdu6qPev76GWxoI2F9QJITrnHdGTlchVWmK58gEZCSI9TVQZDZD";
// /* GET home page. */



var title = "Deluxe Roller",
    image_url = "http://shoppingcart.blindswholesale.com.au/image/thumbnails/18/76/13_budget_range_roller_blind_jpg-100198-350x350.jpg",
    subtitle = "Budget Blockout is a 100% blockout fabric with...";
    button_link = "http://shoppingcart.blindswholesale.com.au/deluxe-roller-blind",
    button_price = "$104",
    button_price2 = "$204",
    button_title = "View item";

router.get('/', function(req, res) {

    var maxWidth, minWidth, maxHeight, minHeight, width, height, dimension,  filename;

    maxWidth = "";
    minWidth = "";
    maxHeight = "";
    minHeight = "";
    width = req.query.width;
    height = req.query.height;
    dimension = width + "-" + height;
    filename = './json/' + dimension + '.json';

    switch ( dimension ) {
        case "1200-1700":
            createJSON({
                dimension: dimension,
                title: title,
                image_url: image_url,
                subtitle: subtitle,
                button_link: button_link,
                button_price: button_price,
                button_title: button_title
            });
            res.redirect( filename );
            break;

        case "1400-1900":
            createJSON({
                dimension: dimension,
                title: title,
                image_url: image_url,
                subtitle: subtitle,
                button_link: button_link,
                button_price: button_price,
                button_title: button_title
            });
            res.redirect( filename );
            break;

        case "600-700":
            res.redirect("./json/" + dimension + ".json");
            break;

        case "600-800":
            res.redirect("./json/" + dimension + ".json");
            break;

        default:
            res.send( invalidDimension() );
    }
});


function invalidDimension() {
    msg = [{
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Opps",
                    "subtitle": "Incorrect dimension..",
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

// Create new queries here
function createJSON() {

    var args = {
        dimension: "600-600",
        title: "Delux Roller Blinds",
        image_url: "http://shoppingcart.blindswholesale.com.au/image/thumbnails/18/76/13_budget_range_roller_blind_jpg-100198-350x350.jpg",
        subtitle : "Budget Blockout is a 100% blockout fabric with...",
        button_link : "http://shoppingcart.blindswholesale.com.au/deluxe-roller-blind",
        button_price : "$104",
        button_title : "View item"
    };

    var a = arguments;
    for (var i = 0; i < a.length; a++) {

        /* Send a generic message
         * This is our object layout
         * We should loop over from our
         */
        if (typeof a[i] == "object") {
            console.log("Is object! continuing...");
            msg = [{
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": args.title,
                            "image_url": args.image_url,
                            "subtitle": args.subtitle,
                            "buttons": [{
                                "type": "web_url",
                                "url": args.button_link,
                                "title": args.button_price
                            }, {
                                "type": "web_url",
                                "url": args.button_link,
                                "title": args.button_title
                            }]
                        }]
                    }
                }
            }];

            var file = JSON.stringify(msg);
            var filename = './public/json/' + args.dimension + '.json';

            // Store our write files here
            fs.writeFile( filename, file, 'utf8', function(err, data) {
                if (err) {
                    console.log("Sorry error has been found!");
                }
                console.log('Successfully created the file..');
            });
        } else {
            console.log("Not an object");
        }
    }
}

module.exports = router;