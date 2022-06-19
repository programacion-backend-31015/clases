const fs = require('fs')

const file = 'data2.txt'

// MODO 1
const myPromise = fs.promises.readFile(file, 'utf-8')
myPromise.then(contenido => {
    console.log(contenido);
})
myPromise.catch(error => {
    console.log('Hubo error leyendo');
})

// MODO 2
fs.promises.readFile(file, 'utf-8')
    .then(c => console.log(c))
    .catch(e => console.log('Hubo un error leyenfo'))

// MODO 3
async function leer() {
    try {
        const contenido = await fs.promises.readFile(file, 'utf-8')
        console.log(contenido)
    } catch(err) {
        console.log('Se atrapo el error')
    }

    console.log('Nada se bloqueo')
}
leer()