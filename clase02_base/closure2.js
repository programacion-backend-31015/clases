function crearGritarNombre(nombre) {
    const signosDeExclamacion = "!!!!"
    console.log("asdasd")
    return () => console.log(`${nombre} ${signosDeExclamacion}`)
}

const gritarSaul = crearGritarNombre("Saul Navarro")
const gritarLizeth = crearGritarNombre('Lizeth Rojas')

