function dividir(dividendo, divisor) {

    return new Promise( (resolve, reject) => {
        if(divisor == 0 ) {
            reject('No se puede dividir entre 0')
        } else {
            resolve(dividendo / divisor)
        }
    } )

}

const promesa = dividir(10, 5)
promesa.then( resultado => console.log(`El resultado es ${resultado}`))
promesa.catch(error => console.log('Hubo un error que dice: ', error))

dividir(40, 0)
    .then(r => console.log(`Resultado es: ${r}`))
    .catch(e => console.log('Hubo un error'))
