const express = require('express')
const passport = require('passport')
const session = require('express-session')
require('./config')(passport)
const db = require('./db')

const PORT = 8080
const app = express()


app.use(session({ resave: false, saveUninitialized: true, secret: 'Secret' }))
app.use(passport.initialize())
app.use(passport.session())

const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) next()
    else res.redirect('/auth/google')
}

app.get('/', (req, res) => res.send('OK'))

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile')
})
app.get('/profile', checkAuthentication, (req, res) => {
    console.log(req.user)
    res.send('Welcomen user ' + req.user.google.email)
})
app.get('/logout', (req, res) => {
    //accounts.google.com/logout
    req.session = null;
    req.logout(err => {
        console.log(err);
        res.redirect('/')
    })
})

app.get('/logout2', function (req, res) { 
    req.session.destroy(function (e) { 
        req.logout(err => {
            console.log(err);
            res.redirect('/')
        })
    }); 
});

// Volvemos a las 22:45 arg !! :) :) :)

db.connect()
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))