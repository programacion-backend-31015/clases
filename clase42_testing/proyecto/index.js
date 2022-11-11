const express = require('express')
const RouterUser = require('./router')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/info', (req, res) => res.send('ok'))
app.use('/api', new RouterUser())

app.listen(8080, () => {
    console.log('Listening...');
})