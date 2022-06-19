const fs = require('fs')

const file = 'package.json'

fs.readFile(file, 'utf-8', (e, c) => {

    if(e) {
        console.log('No se pudo encontrar el archivo');
        return 
    }

    const info = {
        contenidoString: c,
        contenidoObject: JSON.parse(c),
        size: c.length
    }

    fs.writeFile('info.json', JSON.stringify(info), e => {
        if(e) console.log('No pudo escribir info')
    })
})