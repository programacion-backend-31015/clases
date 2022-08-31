const express = require('express')
const session = require('express-session')

const app = express()
const DB = [
    {username: 'nicolas', password: '12345'},
    {username: 'ignacio', password: 'secret'}
]

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

function auth(req, res, next) {
    if(req.session.admin) {
        return next()
    }

    return res.status(401).send('No Autorizado')
}

app.get('/login', (req, res) => {
    let {username, password} = req.query

    if(!username || !password) return res.send('Login Failed')

    username = username.toLowerCase()
    const data = DB.find(d => d.username == username && d.password == password)
    if(!data) return res.send('Login Failed with pass')

    req.session.username = username
    req.session.admin = 1

    res.send('Login Sucess!!')
})

app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok')
        else res.send({status: 'Logout error', body: err})
    })
})

app.get('/private', auth, (req, res) => {
    res.send(`Welcome <i>${req.session.username}</i> to the matrix 🕶`)
})


app.listen(8080)