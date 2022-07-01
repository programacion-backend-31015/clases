const express = require('express')

const routerUser = require('./router/user.router')
const routerProducts = require('./router/products.router')

const app = express()

app.use('/user', routerUser)
app.use('/products', routerProducts)

app.listen(8080)