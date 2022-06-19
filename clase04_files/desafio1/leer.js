const fs = require('fs')

try {
    const data = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(data)
} catch(err) {
    console.log("No se encontro el file")
}


console.log("FIN")