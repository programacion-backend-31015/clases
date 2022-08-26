const fs = require('fs');
const { normalize, schema } = require('normalizr');

const authorSchema = new schema.Entity('authors')
const commentsSchema = new schema.Entity('comments', {
    person: authorSchema
})
const bookSchema = new schema.Entity('books', {
    autor: authorSchema,
    comments: [commentsSchema]
})


fs.readFile('./libros_por_normalizr.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    json = JSON.parse(data)

    const dataNormalized = normalize(json, [bookSchema])
    console.log(dataNormalized);

    fs.writeFile('./libros_normalizados.json', JSON.stringify(dataNormalized), err => {
        console.log(err)
    })

})