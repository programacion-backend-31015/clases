const { fork } = require('child_process')
const forked = fork('child.js')

forked.on('message', msg => {
    console.log(`From child: ${JSON.stringify(msg)}`);
})

setTimeout(() => {
    forked.send({mensaje: 'Soy tu padre!!'})
}, 4000)

console.log('Init Dad');