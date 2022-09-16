const config = require('./config')
const express = require('express')
console.log(config);

const app = express()

console.log(`NODE_END=${config.NODE_ENV}`);

app.get('/', (req, res) => res.send('OK'))

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
})