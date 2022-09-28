const express = require('express')

const app = express()
app.get('/', (req, res) => {
    console.log('GET process:', process.pid);
    res.send('OK ' + process.pid)
})

app.listen(process.env.port || 8080)