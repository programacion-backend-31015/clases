const options = require('./options/db')
const knex = require('knex')(options)

// Ejecutamos el 'create table' en DB
knex.schema.createTable('students', table => {
    
    // Configuiramos las columnas de la tabla
    table.increments('id')
    table.string('name')
    table.integer('age')
})
    .then(() => console.log("table created"))
    .catch(err => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })