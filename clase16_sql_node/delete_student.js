const options = require('./options/db')
const knex = require('knex')(options)

knex.from('students')
    .where({name: 'Milena'})
    .del()

    .then( () => console.log('data deleted!'))
    .catch( err =>  console.log(err))
    .finally( () => knex.destroy())