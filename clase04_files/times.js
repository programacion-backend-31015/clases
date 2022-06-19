
console.log("INICIO")

setTimeout(() => {
    console.log("Se acabo el tiempo")
}, 3000)

setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 2500)


console.log("FIN")