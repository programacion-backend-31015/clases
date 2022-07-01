const express = require('express')

const app = express()

app.use('/static', express.static(__dirname + '/public'))
app.get('/', (req, res) => res.send(__dirname))

app.listen(8080)