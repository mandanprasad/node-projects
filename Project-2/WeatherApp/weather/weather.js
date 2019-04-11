
const request = require('request');

var getWeather = (lat, lon, callback) => {
  request({
    url: `https://api.darksky.net/forecast/ee25260379c6ec53d37d323d970f5547/${lat},${lon}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('something went wrong');
    }
    callback(undefined, {
      temperature:body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    })
    // if(!error && response.statusCode === 200) {
    //   console.log(`Temperature: ${body.currently.temperature}`);
    // }
    // else {
    //   console.log('Unable to connect to server');
  // }
  })
}


module.exports = {
  getWeather
}
