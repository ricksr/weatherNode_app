let request = require('request');

let apiKey = '3240b1e75c8dd9330997742e3b7fcedb';
let city = 'kolkata';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, response, body){
    if(err) {
        console.log('error: ',err);
    } else {
        console.log('body : ', body);
    }
});