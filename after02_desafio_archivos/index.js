const Contenedor = require('./contenedor2')

const contenedorProducts = new Contenedor('products.json')

contenedorProducts.save({title: 'HP'})
    .then(r => console.log(r))

contenedorProducts.deleteById(2)
    .then(r => console.log(r))