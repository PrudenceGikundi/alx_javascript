// script that display the status code of a GET request.

const process = require('process')
const request = require('request')
const requestURL = process.argv[2]

request(requestURL, function(error, response){
    if(error == null){
        console.log('code: ' + response.statusCode);
    };
});