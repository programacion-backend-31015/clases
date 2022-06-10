class Cliente {
    constructor(nombre, fecha, address) {
        this.nombre = nombre
        this.fecha = fecha
        this.address = address
    }
}

const client1 = new Cliente("Gabriel", "2022-06-09", "Far away")
const client2 = {nombre: "Ivan", fecha: "2022-05-03", address: "Close"}

console.log(client1)
console.log(client2)