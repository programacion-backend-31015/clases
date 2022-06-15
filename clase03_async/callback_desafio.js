

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b
const modular = (a, b) => a % b

const operacion = (a, b, cb) => {
    const resultado = cb(a, b)
    const time = new Date().toLocaleTimeString()
    console.log(`[${time}] Resultado es: ${resultado}`)
}

operacion(3, 4, sumar)
operacion(6, 8, dividir)