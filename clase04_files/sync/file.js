const fs = require('fs')

// Lectura de archivos
const data = fs.readFileSync('./data.txt', 'utf-8')
console.log(data)

// Crear archivos
fs.writeFileSync('./new.txt', 'Saludos a Martin De Souza!! \n')

// Agregar contenido
fs.appendFileSync('./new.txt', 'Mas saludos a todos \n')

// Borrar un archivo
fs.unlinkSync('./new.txt')