const productos = [
    {id: 1, name: "beers", price: 323.45 },
    {id: 2, name: "Whiskey", price: 234.56 },
    {id: 3, name: "Wine", price: 45.67 },
    {id: 4, name: "Ferrnet", price: 456.78 },
    {id: 5, name: "Mate", price: 67.89 },
    {id: 6, name: "Tequila", price: 78.90 }
]

// Nombres
const nombres1 = []
for (const product of productos) {
    nombres1.push(product.name)
}
console.log(nombres1);

const nombres2 = productos.map(p => p.name)
console.log(nombres2);

// Precio total
const precioTotal = productos.reduce((a, element) => a += element.price, 0)
console.log(precioTotal);


