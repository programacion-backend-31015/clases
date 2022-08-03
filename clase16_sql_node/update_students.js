const options = require('./options/db')
const knex = require('knex')(options)


knex.from('students')
    .where('name', '=', 'R2')
    .update({age: 9})

    .then( () => console.log('data updated'))
    .catch( err =>  console.log(err))
    .finally( () => knex.destroy())