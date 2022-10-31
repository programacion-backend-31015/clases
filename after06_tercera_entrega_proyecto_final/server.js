const express = require('express')
const connectMongo = require('./config/db.mongo')

const routerProduct = require('./router/products.router')
const routerCart = require('./router/cart.router')
const routerUser = require('./router/users.router')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectMongo()

app.get('/', (r, x) => x.send('OK'))
app.use('/api/product', routerProduct)
app.use('/api/user', routerUser)
app.use('/api/cart', routerCart)

app.listen(8080)