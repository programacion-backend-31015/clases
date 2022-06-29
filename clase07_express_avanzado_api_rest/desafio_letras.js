const express = require('express')

const app = express()

const frase = "Los estudiantes son geniales"

app.get('/api/frase', (req, res) => res.json({ frase }))

app.get('/api/letras/:num', (req, res) => {
    let numero = Number(req.params.num)
    if (isNaN(numero)) {
        res.status(400)
        res.json({error: 'El parametro no es un numero'})

        return 
    }
    if (numero > frase.length) {
        res.status(404)
        res.json({error: 'El parametro esta fuera de rango'})

        return
    }
    
    numero--
    res.json({letra: frase[numero]})
})

app.get('/api/palabras/:num', (req, res) => {
    let numero = Number(req.params.num)
    if (isNaN(numero)) {
        res.status(400)
        res.json({error: 'El parametro no es un numero'})

        return 
    }
    const palabras = frase.split(' ')

    if (numero > palabras.length) {
        res.status(404)
        res.json({error: 'El parametro esta fuera de rango'})

        return
    }
    
    numero--
    res.json({letra: palabras[numero]})
})



app.listen(8080)