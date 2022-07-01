const express = require('express')
const { Router } = express

const routerProducts = Router()
routerProducts.get('/', (req, res) => res.send('products list'))
routerProducts.post('/', (req, res) => res.send('products created'))
routerProducts.put('/', (req, res) => res.send('products updated'))
routerProducts.delete('/', (req, res) => res.send('products deleted'))

module.exports = routerProducts