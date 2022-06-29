const express = require('express')

const app = express()
const users = []

app.get('/api/usuarios', (req, res) => {
    console.log('request recibido')

    res.json(users)
})

app.get('/api/usuarios/new', (req, res) => {
    const name = req.query.name
    users.push({ name })

    res.send('User Added')
})


app.listen(8080)