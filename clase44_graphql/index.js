const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const schemaStudent = require('./schema/student.schema.js')
const resolvers = require('./resolvers/student.js')

const app = express()

app.use('/grapql', graphqlHTTP({
    schema: schemaStudent,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server runnung ${PORT} ...`);
})