const fs = require('fs')

fs.unlink('new.txt', error => {
    if(error) console.log('Hubo un error eliminando :(')
    else console.log('Borrado correctamente');
})

console.log("FIN")