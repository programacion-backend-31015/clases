const fs = require('fs')

fs.appendFile('new.txt', 'New Data appended \n', error => {
    error ? console.log('Hubo un error') : console.log('Se agrego correctamente');
})

console.log('FIN')