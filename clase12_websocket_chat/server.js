const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const Contenedor = require('./contenedor/contenedorFile')

const app = express()
const db = new Contenedor('db.json')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server = http.createServer(app)
const io = new Server(server)

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/data', (req, res) => {
    const data = db.getAll()
    res.json({data})
})

io.on('connection', socket => {
    console.log('Somebody connected!');

    socket.on('chat-in', data => {
        const date = new Date().toLocaleTimeString()
        const dataOut = {
            msn: data.msn,
            username: data.username,
            date
        }
        // Guardar en DB
        db.save(dataOut)

        console.log(dataOut)
        io.sockets.emit('chat-out', dataOut)
    })
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log('Running...');
})