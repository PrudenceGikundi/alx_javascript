// // script that display the status code of a GET request.

// const process = require('process')
// const request = require('request')
// const requestURL = process.argv[2]

// request(requestURL, function(error, response){
//     if(error == null){
//         console.log('code: ' + response.statusCode);
//     };
// });
const fetch = require('node-fetch');

// Get the URL from the command line argument
const url = process.argv[2];

// Send a GET request and retrieve the status code
fetch(url)
    .then(response => {
        console.log(`code: ${response.status}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });