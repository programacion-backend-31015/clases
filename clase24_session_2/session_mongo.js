const connectRedis = require('connect-redis')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const express = require('express')
const MongoStore = require('connect-mongo')

const app = express()
app.use(cookieParser())
app.use(session({
    store: new MongoStore({
        mongoUrl: 'mongodb+srv://r2d2:Bs8a0hZG6uxaf9Gq@cluster111.czvoz.mongodb.net/?retryWrites=true&w=majority',
        advancedOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),
    secret: "orwell",
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