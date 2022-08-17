const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testing')

// Creamos el modelo de los documentos de mongo
const Cat = mongoose.model('Cat', {
    name: String,
    age: Number
})

// Creamos el documento !!
const kitty = new Cat({name: 'Kazajistan', age: 45})

// Guardamos el documento en MONGO
kitty.save()
    .then(() => console.log('Saved ok'))
    .catch(e => console.log('Error:', e))
