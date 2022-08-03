const options = require('./options/db')
const knex = require('knex')(options)

knex.from('students').select('*')
    .then( rows => {
        for (const row of rows) {
            console.log(`${row.id}: ${row.name}`);
        }
    })
    .catch(err => console.log(err))
    .finally(() => knex.destroy())


knex.from('students').select(['id', 'name'])
    .then( rows => {
        for (const row of rows) {
            console.log(`${row['id']}: ${row['name']}`);
        }
    })
    .catch(err => console.log(err))
    .finally(() => knex.destroy())

// Volvemos a las 22:25 arg =D