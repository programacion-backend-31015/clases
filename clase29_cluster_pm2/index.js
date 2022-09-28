const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster) {
    
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    // Volvemos a las 22:15 arg =D

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died :(`);
    })
} else {

    http.createServer((req, res) => {
        console.log(`Entro en el proceso ${process.pid}`);
        res.writeHead(200)
        res.end('Hello everybody!!')
    }).listen(8080)

    console.log(`WOrker ${process.pid} started!`);

}