const fs = require('fs')

const data = {nombre: 'Carlos', apellido: 'Henao'}
fs.writeFileSync('data.json', JSON.stringify(data))

const newData = fs.readFileSync('data.json', 'utf-8')
console.log(JSON.parse(newData))