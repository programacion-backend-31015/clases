const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('data.json');

(async function() {
    await contenedor.init()

    await contenedor.save({title: 'Hobbit'})
    await contenedor.save({title: '1984'})

    console.log(contenedor.getAll())

    console.log(contenedor.getById(2))
    console.log(contenedor.getById(3))
    console.log(contenedor.getById(102))

    await contenedor.deleteById(15)
    await contenedor.deleteById(13)
    await contenedor.deleteById(10)
    await contenedor.deleteById(11)
    await contenedor.deleteById(9)

    console.log(contenedor.getAll())
})();


