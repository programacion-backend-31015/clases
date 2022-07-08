const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const personas = []

app.get('/', (req, res) => {
    res.render('desafio/index', { personas })
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    console.log(req.body, ' added to personas')

    res.render('desafio/index', { personas })
})

app.listen(8080)