const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('hello.pug', {msn: 'Saludos a todos'})
})
app.get('/test', (req, res) => res.send('OK'))

app.get('/datos', (req, res) => {
    res.render('datos.pug', req.query)
})

app.listen(8080)