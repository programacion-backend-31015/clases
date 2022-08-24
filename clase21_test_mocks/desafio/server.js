const express = require('express')
const UserRouter = require('./routes/user.route')

const app = express()
app.use('/api/user', new UserRouter())

app.listen(8080, () => {
    console.log('Server listening 8080 ....');
})