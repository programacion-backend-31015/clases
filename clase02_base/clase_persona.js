class Persona {

    constructor(name, age) {
        this.name = name
        this.age = age

        this.superhero = false
    }

    static shortSaludo = "Hola"

    saludoCompleto() {
        console.log(`Buenas noces, soy ${this.name} y tengo ${this.age} year`)
    }

    saludoEstatico() {
        console.log(Persona.shortSaludo)
    }

}

const p1 = new Persona("Natalia Moreno", 21)
const p2 = new Persona("Ivan Caceres", 30)

p1.saludoCompleto()
p2.saludoCompleto()

Persona.shortSaludo = "JJJJJ"

p1.saludoEstatico()
p2.saludoEstatico()