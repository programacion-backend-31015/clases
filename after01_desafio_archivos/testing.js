const Contenedor = require('./Contenedor')

const contenedor = new Contenedor('data.json')

contenedor.save({title: 'HP, la piedra filosofal'})
contenedor.save({title: '1984'})

console.log(contenedor)