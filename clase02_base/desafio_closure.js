function crearMultiplicador(a) {
    return function(b) {
        console.log(b * a)
    }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar)
console.log(triplicar)

duplicar(2)
duplicar(3)
duplicar(4)

triplicar(2)
triplicar(3)
triplicar(4)