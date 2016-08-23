var request, express, router, fs, data_JSON;

request   = require('request');
express   = require('express');
router    = express.Router();
fs        = require('fs');

// Our default file structure here
data_JSON = './public/json/data.json';

// /* GET home page. */
var title = "Deluxe Roller",
    image_url = "http://shoppingcart.blindswholesale.com.au/image/thumbnails/18/76/13_budget_range_roller_blind_jpg-100198-350x350.jpg",
    subtitle = "Budget Blockout is a 100% blockout fabric with...";
    button_link = "http://shoppingcart.blindswholesale.com.au/deluxe-roller-blind",
    button_price = "$104",
    button_price2 = "$204",
    button_title = "View item";


function numStrip( element ) {
    var data = element.replace(/\D/g, '');
    return Math.floor(data);
}

router.get('/', function(req, res) {

    var maxWidth, minWidth, maxHeight, minHeight, width, height, dimension,  filename;

    maxWidth  = "";
    minWidth  = "";
    maxHeight = "";
    minHeight = "";
    widthT    = req.query.width;
    width     = numStrip(req.query.width);
    heightT   = req.query.height;
    height    = numStrip(req.query.height);

    console.log( "Not stripe" + widthT && heightT);
    console.log( "Only accept number", width + " & the height of: " + height );
    dimension = width + "-" + height;
    filename = './json/' + dimension + '.json';

    switch ( dimension ) {
        case "1000-1500":
            createJSON({
                dimension: dimension,
                title: title,
                image_url: image_url,
                subtitle: subtitle,
                button_link: button_link,
                button_price: "$161.00",
                button_title: button_title
            });
            res.redirect( filename );
            break;

        case "1200-1700":
            createJSON({
                dimension: dimension,
                title: title,
                image_url: image_url,
                subtitle: subtitle,
                button_link: button_link,
                button_price: "$191.00",
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
                button_price: "$221.00",
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


// Create new queries here
function createJSON() {

    var obj = "";
    // First load our local files here
    fs.readFile( data_JSON, 'utf8', function( err, data ){
        if(err) {
            throw new Error(err);
        }
        var list = JSON.parse(data);

        for(var i = 0; i < list.length; i++ ){
            obj += list[i].title;
            obj += list[i].subtitle;
        }
    });

    console.log( obj );


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
                            "title": a[i].title,
                            "image_url": a[i].image_url,
                            "subtitle": a[i].subtitle,
                            "buttons": [{
                                "type": "web_url",
                                "url": a[i].button_link,
                                "title": a[i].button_price
                            }, {
                                "type": "web_url",
                                "url": a[i].button_link,
                                "title": a[i].button_title
                            }]
                        }]
                    }
                }
            }];

            var file = JSON.stringify(msg);
            var filename = './public/json/' + a[i].dimension + '.json';

            console.log( filename );
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