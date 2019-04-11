const request = require('request');

var geocodeAddress = (address) => {
  var encoderAddress = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${encoderAddress}&APPID=74273ac35e8b9ecd80320d35226a88bc`,
        json:true
    }, (error,response,body) => {
      if(error) {
        resolve("Couldnot find that city");
      }
      else if(body.cod === '404') {
        resolve("Unable to connect to google");
      }
      else if(body.cod === '200'){
        resolve({
        address,
        langitude: body.city.coord.lat,
        longitude:body.city.coord.lon
        })
      }
      else {
        reject('Something went wrong');
      }
    })
  })
}

geocodeAddress('jaipur')
.then((data) => {
  console.log(data);
}, (error) => {
  console.log(error);
})
