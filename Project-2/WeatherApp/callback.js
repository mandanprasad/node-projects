const request = require('request');
const yargs = require('yargs')


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
// console.log(argv);
var encoderAddress = encodeURIComponent(argv.address);
request({
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${encoderAddress}&APPID=74273ac35e8b9ecd80320d35226a88bc`,
    json:true
}, (error,response,body) => {

  if(body.cod === '404') {
    console.log("Couldnot find that city");
  }
  else if(body.cod === '200'){
    console.log(`The population of the country is: ${body.city.population}`);
    console.log(`Langitude: ${body.city.coord.lat}`);
    console.log(`Longitude: ${body.city.coord.lon}`);
  }
  else {
    console.log('Something went wrong');
  }

})
