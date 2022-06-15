
const ejecutar = (callback, nombre2) => {
    callback(nombre2)
}
const saludar = (nombre) => {
    console.log(`Saludos para mi amigo ${nombre}`)
}

ejecutar( saludar, "Sebastian Romero" )