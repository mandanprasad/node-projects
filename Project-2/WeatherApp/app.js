 const yargs = require('yargs')
 const geocode = require('./geocode')
 const weather = require('./weather/weather')
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

 geocode.geocodeAddress(argv.address, (errorMessage, result) => {
   if(errorMessage) {
     console.log(errorMessage);
   } else {
     console.log(result.langitude);
     weather.getWeather(result.langitude,result.longitude, (error, weatherResult) => {
       if(error) {
         console.log(error);
       }
       else {
         console.log(`It's currently ${weatherResult.temperature} it's feel like ${weatherResult.apparentTemperature}`);
       }
     })
   }
 })

// lat, lng, callback
