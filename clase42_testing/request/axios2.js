const axios = require('axios')

function getDataProducts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

function getDataPrices() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

Promise.all([getDataProducts(), getDataPrices()])
    .then(function(results) {
        console.log(results);
    })