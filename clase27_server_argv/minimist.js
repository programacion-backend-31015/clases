const parseArgv = require('minimist')

const options = { default: {name: "saul", lastname: "navarro"}}

const args = parseArgv(process.argv.slice(2), options)

console.log(args);


// Volvemos a las 22:25 =D 