const express = require('express')
const { Router } = express

const routerUser = Router()
routerUser.get('/', (req, res) => res.send('user list'))
routerUser.post('/', (req, res) => res.send('user created'))
routerUser.put('/', (req, res) => res.send('user updated'))
routerUser.delete('/', (req, res) => res.send('user deleted'))

module.exports = routerUser