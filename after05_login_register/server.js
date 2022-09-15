const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const routes = require('./routes')
const connectDB = require('./db')

const Users = require('./models')
const { application } = require('express')

passport.use('signup', new LocalStrategy(
    {passReqToCallback: true},
    (req, username, password, done) => {
        Users.findOne({'username': username}, (err, user) => {
            console.log(user);
            if(err) { console.log('errpr'); return done(err) }
            if(user) { console.log('User exist!'); return done(null, false) }

            const newUser = { username, password, name: req.body.name }
            Users.create(newUser, (err, userWithId) => {
                if(err) return done(err)
                console.log(userWithId);
                return done(null, userWithId)
            })
        })
    }
))

passport.use('login', new LocalStrategy(
    (username, password, done) => {
        Users.findOne({username}, (err, user) => {
            if (err) return done(err)
            if(!user) return( done(null, false))

            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser((id, done) => Users.findById(id, done))


// SERVER CONFIG
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'ignacio123',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 30000, secure: false, httpOnly: false }
}))

// INICIALIZAMOS PASSPORT
app.use(passport.initialize())
app.use(passport.session())


// Rutas
app.get('/', routes.getRoot)
app.get('/signup', routes.getSignup)
app.get('/failsignup', routes.getFailSignup)
app.post(
    '/signup',
    passport.authenticate('signup', {failureRedirect: '/failsignup'}),
    routes.getSignup
)

app.get('/login', routes.getLogin)
app.post('/login', passport.authenticate('login'), routes.postLogin)


// INIT SERVER
connectDB(err => {
    if(err) return console.log('No  connected');

    app.listen(8080, () => {console.log('Listeinng...')})
})