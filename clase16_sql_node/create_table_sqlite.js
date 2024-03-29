const options = require('./options/db_sqlite')
const knex = require('knex')(options)

knex.schema.createTable('students', table => {
    table.increments('id')
    table.string('name')
    table.integer('age')
})
    .then(() => console.log("table created"))
    .catch(err => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })