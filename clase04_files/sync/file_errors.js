const fs = require('fs')

try {
    const data = fs.readFileSync('./new.txt')
} catch(err) {
    console.log('Aparecio un error')
    console.error(err)
}

console.log('El show continua')