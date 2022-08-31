const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/set', (req, res) => {
    res.cookie('server', 'From Saul').send('Cookie setted')
})

app.get('/set-timeout', (req, res) => {
    res.cookie('server2', 'Saludos_a_Regina!!', {maxAge: 10000}).send('Cookie seteada. Expira en 10 segundos')
})

app.get('/get', (req, res) => {
    res.send(req.cookies.server)
})

app.get('/set-color/:color', (req, res) => {
    const color = req.params.color || 'white'
    res.cookie('color', color).send(`Se establece el color ${color}`)
})

app.get('/webpage', (req, res) => {
    const color = req.cookies.color || 'white'
    res.send(`<div style="background-color: ${color};">Saaludos a Di Marco!!</div>`)
})


app.listen(8080)