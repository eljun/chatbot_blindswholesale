var ext = this;
var fileSource = 'data.json';

// Simple query
var currentWidth = 1000;
var currentHeight = 600;
var arr = [];

exports.getBlindData_StandardRoller = function() {
    return [{
        "name": "standard-roller-blind",
        "width": [{
            "min": "600",
            "max": "3000"
        }],
        "height": [{
            "min": "600",
            "max": "3100"
        }],
        "priceTable": [{
            "width": "600",
            "height": [{
                "600": "95"
            }, {
                "800": "97"
            }, {
                "1000": "100"
            }, {
                "1200": "104"
            }, {
                "1400": "108"
            }, {
                "1600": "110"
            }, {
                "1800": "112"
            }, {
                "2000": "117"
            }, {
                "2200": "120"
            }, {
                "2400": "122"
            }, {
                "2600": "138"
            }, {
                "2800": "142"
            }, {
                "3000": "155"
            }, {
                "3100": "155"
            }]
        }, {
            "width": "800",
            "height": [{
                "600": "103"
            }, {
                "800": "106"
            }, {
                "1000": "110"
            }, {
                "1200": "115"
            }, {
                "1400": "119"
            }, {
                "1600": "122"
            }, {
                "1800": "125"
            }, {
                "2000": "131"
            }, {
                "2200": "134"
            }, {
                "2400": "138"
            }, {
                "2600": "154"
            }, {
                "2800": "160"
            }, {
                "3000": "174"
            }, {
                "3100": "174"
            }]
        }, {
            "width": "1000",
            "height": [{
                "600": "111"
            }, {
                "800": "114"
            }, {
                "1000": "119"
            }, {
                "1200": "125"
            }, {
                "1400": "130"
            }, {
                "1600": "134"
            }, {
                "1800": "138"
            }, {
                "2000": "145"
            }, {
                "2200": "149"
            }, {
                "2400": "153"
            }, {
                "2600": "171"
            }, {
                "2800": "176"
            }, {
                "3000": "189"
            }, {
                "3100": "189"
            }]
        }, {
            "width": "1200",
            "height": [{
                "600": "120"
            }, {
                "800": "124"
            }, {
                "1000": "130"
            }, {
                "1200": "137"
            }, {
                "1400": "143"
            }, {
                "1600": "148"
            }, {
                "1800": "153"
            }, {
                "2000": "162"
            }, {
                "2200": "167"
            }, {
                "2400": "172"
            }, {
                "2600": "181"
            }, {
                "2800": "193"
            }, {
                "3000": "208"
            }, {
                "3100": "208"
            }]
        }, {
            "width": "2800",
            "height": [{
                "600": "260"
            }, {
                "800": "270"
            }, {
                "1000": "281"
            }, {
                "1200": "296"
            }, {
                "1400": "307"
            }, {
                "1600": "318"
            }, {
                "1800": "328"
            }, {
                "2000": "345"
            }, {
                "2200": "356"
            }, {
                "2400": "367"
            }, {
                "2600": "386"
            }, {
                "2800": "397"
            }, {
                "3000": "423",
            }, {
                "3100": "423",
            }]
        }, {
            "width": "3000",
            "height": [{
                "600": "260"
            }, {
                "800": "270"
            }, {
                "1000": "281"
            }, {
                "1200": "296"
            }, {
                "1400": "307"
            }, {
                "1600": "318"
            }, {
                "1800": "328"
            }, {
                "2000": "345"
            }, {
                "2200": "356"
            }, {
                "2400": "367"
            }, {
                "2600": "386"
            }, {
                "2800": "397"
            }, {
                "3000": "423",
            }, {
                "3100": "423",
            }]
        }, {
                "width": "3100",
                "height": [{
                    "300": "145"
                }, {
                    "600": "145"
                }]
            }
        ]
    }]
}

exports.getBlindData_50mmAluminiumVenetian = function() {
    return [{
        "name": "50mm-aluminium-venetian",
        "width": [{
            "min": "300",
            "max": "3000"
        }],
        "height": [{
            "min": "300",
            "max": "3100"
        }],
        "priceTable": [{
                "width": "300",
                "height": [{
                    "300": "85"
                }, {
                    "600": "85"
                }, {
                    "750": "88"
                }, {
                    "900": "91"
                }, {
                    "1050": "95"
                }, {
                    "1200": "98"
                }, {
                    "1350": "101"
                }, {
                    "1500": "104"
                }, {
                    "1650": "107"
                }, {
                    "1800": "110"
                }, {
                    "1950": "113"
                }, {
                    "2100": "117"
                }, {
                    "2250": "120"
                }, {
                    "2400": "123"
                }, {
                    "2550": "126"
                }, {
                    "2700": "129"
                }, {
                    "2850": "132"
                }, {
                    "3000": "135"
                }, {
                    "3100": "135"
                }, ]
            }, {
                "width": "600",
                "height": [{
                    "300": "85"
                }, {
                    "600": "85"
                }, {
                    "750": "88"
                }, {
                    "900": "91"
                }, {
                    "1050": "95"
                }, {
                    "1200": "98"
                }, {
                    "1350": "101"
                }, {
                    "1500": "104"
                }, {
                    "1650": "107"
                }, {
                    "1800": "110"
                }, {
                    "1950": "113"
                }, {
                    "2100": "117"
                }, {
                    "2250": "120"
                }, {
                    "2400": "123"
                }, {
                    "2550": "126"
                }, {
                    "2700": "129"
                }, {
                    "2850": "132"
                }, {
                    "3000": "135"
                }, {
                    "3100": "135"
                }, ]
            }, {
                "width": "750",
                "height": [{
                    "300": "88"
                }, {
                    "600": "88"
                }, {
                    "750": "91"
                }, {
                    "900": "95"
                }, {
                    "1050": "98"
                }, {
                    "1200": "100"
                }, {
                    "1350": "104"
                }, {
                    "1500": "110"
                }, {
                    "1650": "113"
                }, {
                    "1800": "117"
                }, {
                    "1950": "120"
                }, {
                    "2100": "123"
                }, {
                    "2250": "126"
                }, {
                    "2400": "129"
                }, {
                    "2550": "132"
                }, {
                    "2700": "135"
                }, {
                    "2850": "139"
                }, {
                    "3000": "142"
                }, {
                    "3100": "142"
                }, ]
            }, {
                "width": "900",
                "height": [{
                    "300": " 91"
                }, {
                    "600": " 91"
                }, {
                    "750": " 95"
                }, {
                    "900": " 98"
                }, {
                    "1050": " 101"
                }, {
                    "1200": " 104"
                }, {
                    "1350": " 107"
                }, {
                    "1500": " 113"
                }, {
                    "1650": " 117"
                }, {
                    "1800": " 120"
                }, {
                    "1950": " 123"
                }, {
                    "2100": " 126"
                }, {
                    "2250": " 129"
                }, {
                    "2400": " 132"
                }, {
                    "2550": " 135"
                }, {
                    "2700": " 139"
                }, {
                    "2850": " 142"
                }, {
                    "3000": " 145"
                }, {
                    "3100": " 145"
                }, ]
            }, {
                "width": "1050",
                "height": [{
                    "300": "95"
                }, {
                    "600": "95"
                }, {
                    "750": "98"
                }, {
                    "900": "101"
                }, {
                    "1050": "104"
                }, {
                    "1200": "110"
                }, {
                    "1350": "113"
                }, {
                    "1500": "117"
                }, {
                    "1650": "120"
                }, {
                    "1800": "123"
                }, {
                    "1950": "126"
                }, {
                    "2100": "129"
                }, {
                    "2250": "132"
                }, {
                    "2400": "135"
                }, {
                    "2550": "139"
                }, {
                    "2700": "142"
                }, {
                    "2850": "145"
                }, {
                    "3000": "148"
                }, {
                    "3100": "148"
                }, ]
            }, {
                "width": "1200",
                "height": [{
                    "300": "98"
                }, {
                    "600": "98"
                }, {
                    "750": "104"
                }, {
                    "900": "107"
                }, {
                    "1050": "110"
                }, {
                    "1200": "113"
                }, {
                    "1350": "117"
                }, {
                    "1500": "123"
                }, {
                    "1650": "126"
                }, {
                    "1800": "129"
                }, {
                    "1950": "132"
                }, {
                    "2100": "135"
                }, {
                    "2250": "142"
                }, {
                    "2400": "145"
                }, {
                    "2550": "148"
                }, {
                    "2700": "151"
                }, {
                    "2850": "154"
                }, {
                    "3000": "161"
                }, {
                    "3100": "161"
                }, ]
            }, {
                "width": "3000",
                "height": [{
                    "300": "145"
                }, {
                    "600": "145"
                }, {
                    "750": "154"
                }, {
                    "900": "164"
                }, {
                    "1050": "173"
                }, {
                    "1200": "183"
                }, {
                    "1350": "192"
                }, {
                    "1500": "202"
                }, {
                    "1650": "211"
                }, {
                    "1800": "217"
                }, {
                    "1950": "227"
                }, {
                    "2100": "236"
                }, {
                    "2250": "246"
                }, {
                    "2400": "255"
                }, {
                    "2550": "265"
                }, {
                    "2700": "274"
                }, {
                    "2850": "284"
                }, {
                    "3000": "293"
                }, {
                    "3100": "293"
                }]
            }, {
                "width": "3100",
                "height": [{
                    "300": "145"
                }, {
                    "600": "145"
                }]
            }

        ]
    }]; // End of fabric
};


exports.mergeBlinds = function() {
    return ext.getBlindData_StandardRoller().concat(ext.getBlindData_50mmAluminiumVenetian());
}

// Update product price accordingly
exports.getBlindPrice = function( req_width, req_height ) {

    var all_blinds = ext.getBlindData_StandardRoller().concat(ext.getBlindData_50mmAluminiumVenetian());
    var item_list = [];

    /*  Looping all our blinds products and filter it
        base on the dimension provided                  */

    for (var i = 0; i < all_blinds.length; i++) {

        /*  All our blinds pricing table are merge into one
            so we can easily loop over all the items    */

        var product_name = all_blinds[i];
        item_list = calculateBlinds(product_name, req_width, req_height);

    }

    /*  Once we have the result from our loop
        then we must response it with json output       */

    var output = {
        "text": item_list
    }

    var result = JSON.stringify(output);

    // All passed items will be added here
    console.log(result);
    return result;
}

// Calculate our blinds base on dimensions
function calculateBlinds( data, req_width, req_height) {


    var blinds_list;
    var minWidth = parseInt(data.width[0].min);
    var maxWidth = parseInt(data.width[0].max);
    var minHeight = parseInt(data.height[0].min);
    var maxHeight = parseInt(data.height[0].max);

    /*  Only items that matches the min & max
        requirements are being process here                 */

    if ((req_width >= minWidth) && (req_width <= maxWidth) &&
        (req_height >= minHeight) && (req_height <= maxHeight)) {
        blinds_list = data;
    }

    /*  The resulting items will then be filter
        again for proper pricing result                     */

    if (typeof blinds_list == "object") {

        var new_obj;
        var p_n = blinds_list.name;
        var p_t = blinds_list.priceTable;
        var prev = 0;
        var hprev = 0;

        // Filter our width requirements
        var filterWidth;
        var filterHeight;
        var productList;
        var productPrice;

        /*  Filter our width base on dimension
            if not found then search for next object        */

        var width_i = 0;
        for (; width_i < p_t.length;) {
            if (req_width < p_t[width_i].width) {
                if (prev > 0) {
                    filterWidth = prev;
                } else {
                    filterWidth = p_t[width_i].width;
                }
                break;
            } else {
                if (req_width == blinds_list.width['max']) {
                    filterWidth = p_t[width_i].width;
                }
            }
            prev = p_t[width_i].width;
            width_i++;
            if (width_i == p_t) {
                filterWidth = p_t[i].width;
            }
        }

        /*  Filter our height base on result width above
            when match return the product name and price    */

        var height_i = 0;

        p_t.forEach(function(id, properties) {
            if (id.width == filterWidth) {
                for (; height_i < id.height.length;) {
                    if (req_height < Object.keys(id.height[height_i])) {
                        if (hprev > 0) {
                            filterHeight = hprev;
                        } else {
                            filterHeight = Object.keys(id.height[height_i]);
                            productList = p_n;
                        }
                        break;
                    } else {
                        if (req_height == blinds_list.height['max']) {
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

        // Loop over to our resulting entries
        var new_data = {
            "url": productList,
            "price": productPrice
        }
        new_obj = new_data;
        arr.push( new_obj );
        return arr;
    }
}