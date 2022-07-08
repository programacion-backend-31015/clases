const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/pets', (req, res) => {
    const pets = [
        {name: 'Dorado', animal: 'pez', months: 12},
        {name: 'Firulai', animal: 'perro', months: 20},
        {name: 'Gardel', animal: 'perro', months: 10},
        {name: 'Chinchulin', animal: 'gato', months: 12},
        {name: 'Michi', animal: 'gato', months: 5},
    ]

    const mensaje = 'Mascotas de la clase 🐕'
    res.render('pets.ejs', {pets:[], mensaje})
})


app.listen(8080)