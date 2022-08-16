const express = require('express')
const ContedenorDB = require('./contenedor/contenedor_db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const contenedorDB = new ContedenorDB()

app.get('/api/products', (req, res) => {
    contenedorDB.get(err => {console.log(); res.send(err)})
        .then(result => res.json(result))
})

app.post('/api/products', (req, res) => {
    contenedorDB.insert(req.body, err => {console.log(); res.send(err)})
        .then(result => res.json(result))
})


app.listen(8080)