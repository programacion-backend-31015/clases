import express from 'express'
import { getTime } from './lib/utils'
import Persona from './Persona'

const p:Persona = new Persona('Nico', 'Silva')

const app = express()

app.get('/', (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName()
    })
})

app.listen(8080, () => console.log('Listening...'))