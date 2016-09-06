var fs = require('fs');
var _ = require('lodash');
var ext = this;
var fileSource = 'data.json';

exports.getBlindData_StandardRoller = function() {
    return [{
        "name": "standard-roller-blind",
        "width": [{
            "min": "600",
            "max": "3000"
        }],
        "height": [{
            "min": "600",
            "max": "3000"
        }],
        "priceTable": [{
            "width": "600",
            "height": {
                "600": "95",
                "800": "97",
                "1000": "100",
                "1200": "104",
                "1400": "108",
                "1600": "110",
                "1800": "112",
                "2000": "117",
                "2200": "120",
                "2400": "122",
                "2600": "138",
                "2800": "142",
                "3000": "155"
            }
        }, {
            "width": "800",
            "height": {
                "600": "103",
                "800": "106",
                "1000": "110",
                "1200": "115",
                "1400": "119",
                "1600": "122",
                "1800": "125",
                "2000": "131",
                "2200": "134",
                "2400": "138",
                "2600": "154",
                "2800": "160",
                "3000": "174",
            }
        }, {
            "width": "1000",
            "height": {
                "600": "111",
                "800": "114",
                "1000": "119",
                "1200": "125",
                "1400": "130",
                "1600": "134",
                "1800": "138",
                "2000": "145",
                "2200": "149",
                "2400": "153",
                "2600": "171",
                "2800": "176",
                "3000": "189",
            }
        }, {
            "width": "1200",
            "height": {
                "600": "120",
                "800": "124",
                "1000": "130",
                "1200": "137",
                "1400": "143",
                "1600": "148",
                "1800": "153",
                "2000": "162",
                "2200": "167",
                "2400": "172",
                "2600": "181",
                "2800": "193",
                "3000": "208",
            }
        }]
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
            "max": "3000"
        }],
        "priceTable": [{
            "width": "300",
            "height": {
                "300": "85",
                "600": "85",
                "750": "88",
                "900": "91",
                "1050": "95",
                "1200": "98",
                "1350": "101",
                "1500": "104",
                "1650": "107",
                "1800": "110",
                "1950": "113",
                "2100": "117",
                "2250": "120",
                "2400": "123",
                "2550": "126",
                "2700": "129",
                "2850": "132",
                "3000": "135",
            }
        }, {
            "width": "600",
            "height": {
                "300": "85",
                "600": "85",
                "750": "88",
                "900": "91",
                "1050": "95",
                "1200": "98",
                "1350": "101",
                "1500": "104",
                "1650": "107",
                "1800": "110",
                "1950": "113",
                "2100": "117",
                "2250": "120",
                "2400": "123",
                "2550": "126",
                "2700": "129",
                "2850": "132",
                "3000": "135",
            }
        }, {
            "width": "750",
            "height": {
                "300": "88",
                "600": "88",
                "750": "91",
                "900": "95",
                "1050": "98",
                "1200": "100",
                "1350": "104",
                "1500": "110",
                "1650": "113",
                "1800": "117",
                "1950": "120",
                "2100": "123",
                "2250": "126",
                "2400": "129",
                "2550": "132",
                "2700": "135",
                "2850": "139",
                "3000": "142",
            }
        }, {
            "width": "900",
            "height": {
                "300": " 91",
                "600": " 91",
                "750": " 95",
                "900": " 98",
                "1050": " 101",
                "1200": " 104",
                "1350": " 107",
                "1500": " 113",
                "1650": " 117",
                "1800": " 120",
                "1950": " 123",
                "2100": " 126",
                "2250": " 129",
                "2400": " 132",
                "2550": " 135",
                "2700": " 139",
                "2850": " 142",
                "3000": " 145",
            }
        }]
    }]; // End of fabric
};


/*
for( var i = 0; i < dataAll.length; i++ ){
  var new_obj      = "";
  var width        = dataAll[i].priceTable;
  var product_name = dataAll[i].name;

  for( var b = 0; b < width.length; b++ ) {
    var d_w = width[b].width;
    var d_h = width[b].height;
    var obj = width[b];

    for( var key in d_h ) {
      var new_data = {
        "dimension": obj['width'] +'-'+ key,
        "data": [{
          "url": product_name,
          "price": d_h[key]
        }]
      };
      new_obj = new_data;
      var dd = JSON.stringify( new_obj );
      arr.push( dd );
      createJSON( arr );
    }
  }
}*/

var currentWidth = 600;
var currentHeight = 600;
var newPrice = "";
var arr = [];

// This triggers dimensional filter
getBlindPrice( currentWidth, currentHeight );

// Update product price accordingly
function getBlindPrice(req_width, req_height) {

    var all_blinds = ext.getBlindData_StandardRoller().concat(ext.getBlindData_50mmAluminiumVenetian());
    var price = [];

    for (var i = 0; i < all_blinds.length; i++) {
        var product_name = all_blinds[i];
        price = calculateBlinds( product_name, req_width, req_height);
    }

    // All passed items will be added here
    console.log("Return data: ", price);
    return price;
}

// Calculate our blinds base on dimensions
function calculateBlinds(data, req_width, req_height) {

    var blinds_list = data.priceTable;
    var minWidth = parseInt(data.width[0].min);
    var maxWidth = parseInt(data.width[0].max);
    var minHeight = parseInt(data.height[0].min);
    var maxHeight = parseInt(data.height[0].max);

    if ((req_width >= minWidth) && (req_width <= maxWidth) &&
        (req_height >= minHeight) && (req_height <= maxHeight)) {
        return blinds_list;
    } else {
        return [{
            "Error": "No items found for that dimensions"
        }];
    }
    /*for( var i = 0; i < data.length; i++ ) {

      var val  = data[i];

      var minWidth  = parseInt( val['width'][0].min );
      var maxWidth  = parseInt( val['width'][0].max );
      var minHeight = parseInt( val['height'][0].min );
      var maxHeight = parseInt( val['height'][0].max );

      if( (req_width >= minWidth ) && (req_width <= maxWidth  ) &&
        ( req_height >= minHeight  ) && ( req_height <= maxHeight  )){
        console.log( val['name'] );
        return val;
      } else {
        return [{"Error": "No items found for that dimensions"}];
      }
    }*/
}


// Create our files here
function createJSON(element) {
    fs.writeFile(fileSource, element, 'utf8', function(err, data) {
        if (err) {
            console.log("Error found!", err);
        }
    })
}