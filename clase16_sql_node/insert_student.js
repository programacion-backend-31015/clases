const options = require('./options/db')
const knex = require('knex')(options)

const students = [
    {name: 'Ignacio Wolf', age: 25},
    {name: 'Alexander Mina', age: 30},
    {name: 'Carlos el Paisa', age: 22},
    {name: 'Regina de la Cruz', age: 21}
]

knex('students').insert(students)
    .then(() => console.log('students inserted'))
    .catch(err => console.log(err))
    .finally(() => knex.destroy())