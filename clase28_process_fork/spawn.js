const { spawn } = require('child_process')

const child = spawn('find', ['.'])

child.stdout.on('data', data => {
    console.log(` . ${data}`);
})

child.stderr.on('data', data => {
    console.log(stderr);
})

child.on('error', err => {
    console.log(err);
})

child.on('close', code => {
    console.log('The child is dead');
})