const yargs = require('yargs')(process.argv.slice(2))

const argv = yargs
    .default({
        name: 'Gonzalo',
        lastname: "isa"
    })
    .alias({ n: 'name', l: 'lastname' })
    .boolean('admin')
    .argv

console.log(argv);