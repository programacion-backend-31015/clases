const express = require('express')
// 22:30 continueamos....
const app = express()
const PORT = 8080
let visitas = 0

app.get('/', (request, response) => {
    response.send("<h1 style='color: blue;'>Bienvenidos a mi Space</h1>")
})
app.get('/tutores', (request, response) => {
    response.send({mensaje: 'Saludos a todos los tutores de la clase =D'})
})
app.get('/hora', (req, res) => res.send(new Date().toLocaleTimeString()) )

app.get('/visita', (req, res) => {
    visitas++
    res.send(`Se ha visitado este sitio ${visitas} veces`)
})


const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server.`, e))