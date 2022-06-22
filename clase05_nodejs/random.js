
const total = 10000
const obj = {}

for (let i = 0; i < total; i++) {
    const numero = Math.floor(Math.random() * 20 + 1)
    
    if(numero in obj) obj[numero]++
    else obj[numero] = 1
}

console.log(obj)