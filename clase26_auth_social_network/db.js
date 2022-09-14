const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost/user'

const connect = async () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection

    db.on('error', () => console.log('No se pudo conectar'))
    db.on('open', () => console.log('Se conecto =D'))
}

module.exports = { connect }