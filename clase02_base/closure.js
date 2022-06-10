function crearGritarNombre(nombre) {
    const signosDeExclamacion = "!!!!"

    return function() {
        console.log(`${nombre} ${signosDeExclamacion}`)
    }

    console.log("asdasd")
}

const gritarSaul = crearGritarNombre("Saul Navarro")
const gritarLizeth = crearGritarNombre('Lizeth Rojas')


gritarSaul()
gritarLizeth()