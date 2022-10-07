const cluster = require('cluster')
const express = require('express')

const PORT = process.argv[2] || 8080
const moduCluster = process.argv[3] || 'cluster'

function isPrime(num) {
    if([2, 3].includes(num)) return true
    else if([2, 3].some(n => num % n == 0)) return false
    else {
        let i = 5, w = 2;
        while((i ** 2 <= num)) {
            if(num % i == 0) return false
            i += w
            w =  6 - w
        }
    }
    
    return true;
}

if(moduCluster == 'cluster' && cluster.isMaster) {
    const numCPUs = require('os').cpus().length

    console.log('numCPUs:', numCPUs);
    console.log('PID master:', process.pid);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Died!');
    })
} else {

    const app = express()
    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000

        for (let i = 0; i < max; i++) {
            if(isPrime(i)) primes.push(i)
        }
        res.json(primes)
    })

    app.listen(PORT, () => {
        console.log('Server listen ', PORT, ' pid: ', process.pid);
    })


}