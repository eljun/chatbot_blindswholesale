var fs = require('fs');
exports.test = function(){
  return [
{
      "name": "50mm-aluminium-venetian",
      "width": [{
          "min": "300",
          "max": "3000"
      }],
      "height": [{
          "min": "300",
          "max": "3000"
      }],
      "priceTable": [
          {
  "width": "300",
  "height": [
     {"300":"102"},
     {"600":"102"},
     {"750":"106"},
     {"900":"109"},
     {"1050":"114"},
     {"1200":"118"},
     {"1350":"121"},
     {"1500":"125"},
     {"1650":"128"},
     {"1800":"132"},
     {"1950":"136"},
     {"2100":"140"},
     {"2250":"144"},
     {"2400":"148"},
     {"2550":"151"},
     {"2700":"155"},
     {"2850":"158"},
     {"3000":"162"},
     {"3100":"162"}
  ]
},{
  "width": "600",
  "height": [
     {"300":"102"},
     {"600":"102"},
     {"750":"106"},
     {"900":"109"},
     {"1050":"114"},
     {"1200":"118"},
     {"1350":"121"},
     {"1500":"125"},
     {"1650":"128"},
     {"1800":"132"},
     {"1950":"136"},
     {"2100":"140"},
     {"2250":"144"},
     {"2400":"148"},
     {"2550":"151"},
     {"2700":"155"},
     {"2850":"158"},
     {"3000":"162"},
     {"3100":"162"}
  ]
},{
  "width": "750",
  "height": [
     {"300":"106"},
     {"600":"106"},
     {"750":"109"},
     {"900":"114"},
     {"1050":"118"},
     {"1200":"120"},
     {"1350":"125"},
     {"1500":"132"},
     {"1650":"136"},
     {"1800":"140"},
     {"1950":"144"},
     {"2100":"148"},
     {"2250":"151"},
     {"2400":"155"},
     {"2550":"158"},
     {"2700":"162"},
     {"2850":"167"},
     {"3000":"170"},
     {"3100":"170"}
  ]
},{
  "width": "900",
  "height": [
     {"300":"109"},
     {"600":"109"},
     {"750":"114"},
     {"900":"118"},
     {"1050":"121"},
     {"1200":"125"},
     {"1350":"128"},
     {"1500":"136"},
     {"1650":"140"},
     {"1800":"144"},
     {"1950":"148"},
     {"2100":"151"},
     {"2250":"155"},
     {"2400":"158"},
     {"2550":"162"},
     {"2700":"167"},
     {"2850":"170"},
     {"3000":"174"},
     {"3100":"174"}
  ]
},{
  "width": "1050",
  "height": [
     {"300":"114"},
     {"600":"114"},
     {"750":"118"},
     {"900":"121"},
     {"1050":"125"},
     {"1200":"132"},
     {"1350":"136"},
     {"1500":"140"},
     {"1650":"144"},
     {"1800":"148"},
     {"1950":"151"},
     {"2100":"155"},
     {"2250":"158"},
     {"2400":"162"},
     {"2550":"167"},
     {"2700":"170"},
     {"2850":"174"},
     {"3000":"178"},
     {"3100":"178"}
  ]
},{
  "width": "1200",
  "height": [
     {"300":"118"},
     {"600":"118"},
     {"750":"125"},
     {"900":"128"},
     {"1050":"132"},
     {"1200":"136"},
     {"1350":"140"},
     {"1500":"148"},
     {"1650":"151"},
     {"1800":"155"},
     {"1950":"158"},
     {"2100":"162"},
     {"2250":"170"},
     {"2400":"174"},
     {"2550":"178"},
     {"2700":"181"},
     {"2850":"185"},
     {"3000":"193"},
     {"3100":"193"}
  ]
},{
  "width": "1350",
  "height": [
     {"300":"125"},
     {"600":"125"},
     {"750":"132"},
     {"900":"136"},
     {"1050":"144"},
     {"1200":"148"},
     {"1350":"151"},
     {"1500":"158"},
     {"1650":"162"},
     {"1800":"170"},
     {"1950":"174"},
     {"2100":"178"},
     {"2250":"185"},
     {"2400":"190"},
     {"2550":"197"},
     {"2700":"200"},
     {"2850":"204"},
     {"3000":"211"},
     {"3100":"211"}
  ]
},{
  "width": "1500",
  "height": [
     {"300":"132"},
     {"600":"132"},
     {"750":"136"},
     {"900":"144"},
     {"1050":"148"},
     {"1200":"155"},
     {"1350":"158"},
     {"1500":"167"},
     {"1650":"170"},
     {"1800":"178"},
     {"1950":"181"},
     {"2100":"190"},
     {"2250":"193"},
     {"2400":"200"},
     {"2550":"204"},
     {"2700":"211"},
     {"2850":"220"},
     {"3000":"223"},
     {"3100":"223"}
  ]
},{
  "width": "1650",
  "height": [
     {"300":"136"},
     {"600":"136"},
     {"750":"140"},
     {"900":"148"},
     {"1050":"155"},
     {"1200":"158"},
     {"1350":"167"},
     {"1500":"174"},
     {"1650":"178"},
     {"1800":"185"},
     {"1950":"193"},
     {"2100":"197"},
     {"2250":"204"},
     {"2400":"211"},
     {"2550":"216"},
     {"2700":"223"},
     {"2850":"230"},
     {"3000":"234"},
     {"3100":"234"}
  ]
},{
  "width": "1800",
  "height": [
     {"300":"140"},
     {"600":"140"},
     {"750":"148"},
     {"900":"151"},
     {"1050":"158"},
     {"1200":"167"},
     {"1350":"174"},
     {"1500":"181"},
     {"1650":"185"},
     {"1800":"193"},
     {"1950":"200"},
     {"2100":"208"},
     {"2250":"216"},
     {"2400":"220"},
     {"2550":"227"},
     {"2700":"234"},
     {"2850":"242"},
     {"3000":"250"},
     {"3100":"250"}
  ]
},{
  "width": "1950",
  "height": [
     {"300":"144"},
     {"600":"144"},
     {"750":"151"},
     {"900":"158"},
     {"1050":"167"},
     {"1200":"174"},
     {"1350":"181"},
     {"1500":"190"},
     {"1650":"197"},
     {"1800":"204"},
     {"1950":"211"},
     {"2100":"220"},
     {"2250":"227"},
     {"2400":"234"},
     {"2550":"238"},
     {"2700":"246"},
     {"2850":"253"},
     {"3000":"260"},
     {"3100":"260"}
  ]
},{
  "width": "2100",
  "height": [
     {"300":"148"},
     {"600":"148"},
     {"750":"155"},
     {"900":"162"},
     {"1050":"174"},
     {"1200":"181"},
     {"1350":"190"},
     {"1500":"197"},
     {"1650":"204"},
     {"1800":"211"},
     {"1950":"220"},
     {"2100":"227"},
     {"2250":"234"},
     {"2400":"242"},
     {"2550":"250"},
     {"2700":"257"},
     {"2850":"269"},
     {"3000":"276"},
     {"3100":"276"}
  ]
},{
  "width": "2250",
  "height": [
     {"300":"151"},
     {"600":"151"},
     {"750":"162"},
     {"900":"170"},
     {"1050":"178"},
     {"1200":"185"},
     {"1350":"193"},
     {"1500":"204"},
     {"1650":"211"},
     {"1800":"220"},
     {"1950":"227"},
     {"2100":"238"},
     {"2250":"246"},
     {"2400":"253"},
     {"2550":"260"},
     {"2700":"269"},
     {"2850":"280"},
     {"3000":"287"},
     {"3100":"287"}
  ]
},{
  "width": "2400",
  "height": [
     {"300":"158"},
     {"600":"158"},
     {"750":"167"},
     {"900":"174"},
     {"1050":"185"},
     {"1200":"193"},
     {"1350":"200"},
     {"1500":"211"},
     {"1650":"220"},
     {"1800":"227"},
     {"1950":"238"},
     {"2100":"246"},
     {"2250":"253"},
     {"2400":"265"},
     {"2550":"272"},
     {"2700":"280"},
     {"2850":"292"},
     {"3000":"299"},
     {"3100":"299"}
  ]
},{
  "width": "2550",
  "height": [
     {"300":"162"},
     {"600":"162"},
     {"750":"170"},
     {"900":"181"},
     {"1050":"190"},
     {"1200":"200"},
     {"1350":"208"},
     {"1500":"220"},
     {"1650":"227"},
     {"1800":"238"},
     {"1950":"246"},
     {"2100":"257"},
     {"2250":"265"},
     {"2400":"276"},
     {"2550":"283"},
     {"2700":"292"},
     {"2850":"302"},
     {"3000":"310"},
     {"3100":"310"}
  ]
},{
  "width": "2700",
  "height": [
     {"300":"167"},
     {"600":"167"},
     {"750":"174"},
     {"900":"185"},
     {"1050":"197"},
     {"1200":"204"},
     {"1350":"216"},
     {"1500":"223"},
     {"1650":"234"},
     {"1800":"246"},
     {"1950":"253"},
     {"2100":"265"},
     {"2250":"276"},
     {"2400":"283"},
     {"2550":"295"},
     {"2700":"306"},
     {"2850":"313"},
     {"3000":"325"},
     {"3100":"325"}
  ]
},{
  "width": "2850",
  "height": [
     {"300":"170"},
     {"600":"170"},
     {"750":"181"},
     {"900":"193"},
     {"1050":"211"},
     {"1200":"223"},
     {"1350":"234"},
     {"1500":"242"},
     {"1650":"253"},
     {"1800":"265"},
     {"1950":"276"},
     {"2100":"287"},
     {"2250":"295"},
     {"2400":"306"},
     {"2550":"318"},
     {"2700":"329"},
     {"2850":"336"},
     {"3000":"348"},
     {"3100":"348"}
  ]
},{
  "width": "3000",
  "height": [
     {"300":"174"},
     {"600":"174"},
     {"750":"185"},
     {"900":"197"},
     {"1050":"208"},
     {"1200":"220"},
     {"1350":"230"},
     {"1500":"242"},
     {"1650":"253"},
     {"1800":"260"},
     {"1950":"272"},
     {"2100":"283"},
     {"2250":"295"},
     {"2400":"306"},
     {"2550":"318"},
     {"2700":"329"},
     {"2850":"341"},
     {"3000":"352"},
     {"3100":"352"}
  ]
},{
  "width": "3100",
  "height": [
     {"300":"174"},
     {"600":"174"},
     {"750":"185"},
     {"900":"197"},
     {"1050":"208"},
     {"1200":"220"},
     {"1350":"230"},
     {"1500":"242"},
     {"1650":"253"},
     {"1800":"260"},
     {"1950":"272"},
     {"2100":"283"},
     {"2250":"295"},
     {"2400":"306"},
     {"2550":"318"},
     {"2700":"329"},
     {"2850":"341"},
     {"3000":"352"},
     {"3100":"352"}
  ]
}
      ]
    }
  ]
  // return data;
}


function multiplier( object, multiply_by ) {

  var arr = [];
  var update_price = {};
  var oo;
  var momo;
  var name, width, height, priceTable, pricelist;

  for( var i = 0; i < object.length; i++ ) {

    name      = object[i].name,
    width     = object[i].width,
    height    = object[i].height,
    pricelist = object[i].priceTable;

    pricelist.forEach(function( id, prop ) {
      for( var height_i = 0; height_i < id.height.length; height_i++ ) {
        var price = Object.keys( id.height[height_i] );
        var new_prices = Math.round( id.height[ height_i ][price] * multiply_by );
        update_price[price] = new_prices;
      }
      oo = { "width": id.width, "height": update_price }
      console.log( oo )
      momo = oo;
      // console.log( momo );
    })
  }
}


// Create our files here
function createJSON(element) {
    fs.writeFile('dump.json', JSON.stringify(element), 'utf8', function(err, data) {
        if (err) {
            console.log("Error found!", err);
        }
    })
}

// First increment
// multiplier( this.test(), 1.2 );
// Second increment
// multiplier( this.test(), 1.15 );

// Final increment
multiplier( this.test(), 1.15 );

this.test();