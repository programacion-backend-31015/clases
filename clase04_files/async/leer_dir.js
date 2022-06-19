const fs = require('fs')

fs.readdir('myFolder', (error, nombres) => {
    if(error) console.log('No se pudo leer la carpeta')
    else console.log(nombres)
})