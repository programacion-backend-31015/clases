const fs = require('fs')

const data = "No estoy enfermo >:( \n"
fs.writeFile('new.txt', data, error => {
    if(error) {
        console.log('No se pudo escribir el archivo');
    } else {
        console.log('Se escribio correctamente')
    }
})

console.log("FIN")