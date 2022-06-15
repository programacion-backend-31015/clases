
// Funciones 
function sumar(a, b) {
    return a + b
}

const resultado = sumar(3, 5)
console.log(resultado)

console.log( sumar("Arturo ", "Verbel"))

// Funciones anonimas
const mostrar = function(nombre) {
    console.log("Mostrando a ", nombre)
}

mostrar("Natalia Moreno")

// Arrow Functions
const mostrar2 = (nombre) => {
    console.log(nombre)
}

mostrar2("Romina, you Rock!")

// Simple arrow funcions
const mostrarSimple = nombre => console.log(nombre, "!!")

mostrarSimple("Buenas noches Franco")


// Return implicito
const promedio = (a, b) => (a + b) / 2

console.log(promedio(5, 10))

const sumar2 = (a, b) => {
    return a + b
}

console.log(sumar2(4, 5))

