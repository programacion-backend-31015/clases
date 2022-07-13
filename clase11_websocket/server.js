const express = require('express')
const http = require('http')
const { Server } = require('socket.io') 

const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.use(express.static('./public'))
app.get('/', (req, res) => res.sendFile('index.html'))

io.on('connection', (socket) => {
    socket.on('notificacion', data => {
        const time = new Date().toLocaleTimeString()
        console.log(`(${time}) ${data}`);

        io.sockets.emit('mensaje', data)

    })
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Server running ...'))

