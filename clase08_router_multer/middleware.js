const express = require('express')
const router = express.Router()

const app = express()

// Funciones middlewaree
const validateAdmin = (req, res, next) => {
    if('admin' in req.headers) {
        next()
    } else {
        res.status(400)
        res.send('Debe ser admin')
    }
}

// Link middleware to app
app.use( (req, res, next) => {
    console.log('Time: ', new Date().toLocaleTimeString());
    next()
})
router.use(validateAdmin)

// Main routes
app.get('/', (req, res) => res.send('OK'))
app.get('/ok', (req, res) => {
    throw 'Salto un error'
    res.send('OK OK')
})
router.get('/', (req, res) => res.send('Hola Admin, vamos a borrar a alguien 🙊 '))
router.get('/super', (req, res) => res.send('Hola Super admin !!! '))

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Algo se broke!!')
})

app.use('/admin', router)

app.listen(8080)

// 15 mins
// nos conectamos al minuto 48