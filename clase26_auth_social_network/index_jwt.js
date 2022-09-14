const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PRIVATE_KEY = 'Ignacio_Wolf'
const users = []

function generateToken(user) {
    const data = {
        username: user.username,
        rol: user.rol
    }

    return jwt.sign({data}, PRIVATE_KEY, {expiresIn: '24h'})
}

function auth(req, res, next) {
    const authHeader = req.headers.token

    if(!authHeader) return res.status(401).json('no auth')
    jwt.verify(authHeader, PRIVATE_KEY, (err, decoded) => {
        if(err) return res.status(403).json('error auth')

        req.user = decoded.data
        next()
    })
}

app.post('/register', (req, res) => {
    const { username } = req.body

    const userExists = users.find(u => u.username == username)
    if(userExists) return res.json({error: 'User already nexists'})

    const user = req.body
    users.push(user)
    const token = generateToken((user))

    res.json({ token })
})

app.post('/login', (req, res) => {

    const {username, password} = req.body
    
    const user = users.find(u => u.username == username && u.password == password)
    if(!user) return res.json({error: 'Credentiasl fails'})

    const token = generateToken(user)
    res.json({ token })
})

app.get('/info', auth, (req, res) => {
    if(req.user) res.send('Toma tu info privada ')
    else res.send('Not permission')
})

app.listen(8080)

