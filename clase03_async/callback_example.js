function escribirYRegistrar(texto, callback) {

    console.log("Escribiendo en el archivo....")
    console.log(texto)

    callback('Archivo escrito con exito :)')
}   

escribirYRegistrar('Saludos para Ignacio Wolf', (mensaje) => {
    const fecha = new Date().toLocaleTimeString()
    console.log(`[${fecha}] ${mensaje}`)
})

