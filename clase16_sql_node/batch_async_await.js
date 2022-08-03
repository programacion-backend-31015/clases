const options = require('./options/db')
const knex = require('knex')(options)

const data = [
    {name: 'Ignacio Wolf', age: 25},
    {name: 'Alexander Mina', age: 30},
    {name: 'Carlos el Paisa', age: 22},
    {name: 'Regina de la Cruz', age: 17},
    {name: 'R2', age: 9}
];
const tableName = 'students';

(async () => {
    try {
        console.log('Clean data')
        await knex(tableName).del()

        console.log('Insert students')
        await knex(tableName).insert(data)

        console.log('Read all students..');
        let students = await knex.from(tableName).select('*')
        for (const student of students) {
            console.log(`${student.id}: [${student.age}] ${student.name}`);
        }

        console.log('Insert one student');
        await knex(tableName).insert({name: 'Sebastian Romero', age: 33})
        
        console.log('Read all students again..');
        students = await knex.from(tableName).select('*')
        for (const student of students) {
            console.log(`${student.id}: [${student.age}] ${student.name}`);
        }


    } catch(e) {
        console.log(e);
    } finally {
        knex.destroy()
    }
})()