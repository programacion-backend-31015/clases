const fs = require('fs')

function callback(error, contenido) {
    if (error) {
        console.log('Hubo un error')
    } else {
        console.log(contenido)
    }
}

fs.readFile('data.txt', 'utf-8', callback)

console.log("FIN")