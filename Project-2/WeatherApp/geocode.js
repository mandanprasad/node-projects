const request = require('request');
var geocodeAddress = (address, callback) => {
  var encoderAddress = encodeURIComponent(address);
  request({
      url: `http://api.openweathermap.org/data/2.5/forecast?q=${encoderAddress}&APPID=74273ac35e8b9ecd80320d35226a88bc`,
      json:true
  }, (error,response,body) => {
    if(error) {
      callback("Couldnot find that city");
    }
    else if(body.cod === '404') {
      callback("Unable to connect to google");
    }
    else if(body.cod === '200'){
      callback(undefined, {
      address,
      langitude: body.city.coord.lat,
      longitude:body.city.coord.lon
      })

    }
    else {
      console.log('Something went wrong');
    }
  })
}
module.exports = {
  geocodeAddress
}
