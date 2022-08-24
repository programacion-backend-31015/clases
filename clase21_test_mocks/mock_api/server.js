const express = require('express')

const app = express()

const nombres = ['Nicolas', 'R2', 'Ignacio', 'Regina']
const apellidos = ['Di Marco', 'Awesome', 'Wolf', 'De la Cruz']
const colores = ['red', 'blue', 'yellow', 'white']


app.get('/test', (req, res) => {

    const idx = Math.floor(Math.random() * colores.length)

    res.json({
        nombre: nombres[idx],
        apellido: apellidos[idx],
        color: colores[idx]
    })
})

app.listen(8080)