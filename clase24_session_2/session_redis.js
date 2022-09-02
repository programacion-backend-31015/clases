const connectRedis = require('connect-redis')
const session = require('express-session')
const express = require('express')
const redis = require('redis')
const cookieParser = require('cookie-parser')

const clientRedis = redis.createClient({
    legacyMode: true,
    host: 'localhost',
    port: 6379
})
clientRedis.connect().catch(console.error)

const RedisStore = connectRedis(session)

const app = express()
app.use(cookieParser())
app.use(session({
    store: new RedisStore({client: clientRedis}),
    secret: "dumbledure",
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    if(req.session.views) {
        req.session.views++
        res.send(`<h2>Views ${req.session.views}</h2>`)
    } else {
        req.session.views = 1
        res.send('Welcome!')
    }
})

app.listen(8080)