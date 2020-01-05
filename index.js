let request = require('request');

let apiKey = '3240b1e75c8dd9330997742e3b7fcedb';
let city = 'kolkata';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, response, body){
    if(err) {
        console.log('error: ',err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});