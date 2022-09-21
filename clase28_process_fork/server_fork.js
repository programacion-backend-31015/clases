const http = require('http')
const { fork } = require('child_process')

let visitas = 0
const server = http.createServer()

server.on('request', (req, res) => {
    const { url } = req

    if(url == '/calculo') {
        const computo = fork('./calculo.js')
        computo.send('start')
        computo.on('message', sum => {
            console.log('asdasd');
            return res.end('La suma es ' + sum)
        })
    } else if(url == '/') {
        res.end(`Ok ${++visitas}`)
    }
})

server.listen(8080, err => {
    if(err) throw new Error(err)
    console.log('Server running...');
})