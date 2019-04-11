const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;
var encoderAddress = encodeURIComponent(argv.address);
var geocodeURl = `http://api.openweathermap.org/data/2.5/forecast?q=${encoderAddress}&APPID=74273ac35e8b9ecd80320d35226a88bc`
console.log(geocodeURl);
axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${encoderAddress}&APPID=74273ac35e8b9ecd80320d35226a88bc`).then((response) => {
   if(response.data .status === 'ZERO_RESULTS') {
     throw new Error('Unable to find that address');
   }
    var lat = response.data.city.coord.lat;
    var lon = response.data.city.coord.lon;
    var weatherURL = `https://api.darksky.net/forecast/ee25260379c6ec53d37d323d970f5547/${lat},${lon}`;
   console.log(response.data);
   console.log(`The lat is: ${lat} and lon is: ${lon}`);

   return axios.get(weatherURL).then((response) => {
     var temperature = response.data.currently.temperature;
     var apparentTemperature = response.data.currently.apparentTemperature
     console.log(`The currently ${temperature} but its feel like ${apparentTemperature}`);
   })
})
.catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API server.');
  }
    else {
      console.log(e.message);
    }
})
