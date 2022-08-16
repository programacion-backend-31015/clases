const db = require('./config/db')


db.schema.createTable('products', table => {
    table.increments('id')
    table.string('name')
    table.float('price')
})
    .then(() => console.log("table products created"))
    .catch(err => {console.log(err); throw err})
    .finally(() => {
        db.destroy()
    })