const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const Users = require('./models')

const app = express()
app.use(express.urlencoded({extended: true}))

const DBlocal = [ {username: 'r2', password: 'd2', name: 'Artur'}, {username: 'manuel', password: '123456', name: 'Manuel'} ]

// Pasos para loguear con passport
passport.use('login', new LocalStrategy(
    (username, password, done) => {
        console.log(username);
        Users.findOne({username}, (err, user) => {
            
            if(err) return done(err)
            if(!user) console.log('User not found');

            return done(null, user)
        })
    }
))
passport.use('signup', new LocalStrategy({passReqToCallback: true}, 
    (req, username, password, done) => {
        Users.create({username, password, name: req.body.name}, (err, userWithID) => {
            if(err) return done(err)

            console.log(userWithID);
            return done(null, userWithID)
        })
    }
))
passport.serializeUser((user, done) => { done(null, user._id) })
passport.deserializeUser((id, done) => Users.findById(id, done) )

// Configuracion de Session
app.use(session({
    secret: 'catting',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 200
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


// Definimos las rutas !
app.get('/', (req, res) => {
    res.send('Welcome to the Jungle!!');
})
app.get('/login', (req, res) => {
    if(req.isAuthenticated()) {
        let user = req.user
        console.log('User logueado desde antes')
        res.sendFile( __dirname + '/views/index.html')
    } else {
        res.sendFile(__dirname + '/views/login.html')
    }
})
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin'}), (req, res) => {
    console.log('User logueado por post')
    res.sendFile( __dirname + '/views/index.html')
})
app.get('/faillogin', (req, res) => {
    console.log('Error login')
    res.sendFile( __dirname + '/views/login-error.html')
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
})
app.post('/signup', passport.authenticate('signup'), (req, res) => {
    console.log('User registrado !!!')
    res.send('OK !!')
})

// PRIVATE route
function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) next()
    else res.redirect('/login')
}
app.get('/private', checkAuthentication, (req, res) => {
    const { user } = req
    console.log('User: ', user)
    res.send('<h1>Solo pudiste entrar poruque estas logueado !!</h1>')
})


// Inicializamos la aplication
function connectDB(url, cb) {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
        if(!err) console.log('DB connected')
        if(cb != null) cb(err)
    })
}
connectDB('mongodb://localhost:27017/users', err => {
    if(err) return console.log('Error connecting DB', err)
    app.listen(8080, () => console.log('Listening...'))
})