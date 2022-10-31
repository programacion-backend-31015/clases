const mongoose = require('mongoose')
const { Router } = require('express')
const CartModel = require('../models/cart.model')
const ProductModel = require('../models/product.model')

const routerCart = Router()

routerCart.post('/', (req, res) => {
    const cart = new CartModel()
    cart.save()
        .then(() => res.json(cart))
        .catch(e => res.json(e))
})

routerCart.put('/:productName', async (req, res) => {
    try {

        userID = mongoose.Types.ObjectId(req.headers.userid)
        let cart = await CartModel.findOne({user: userID})
        if(!cart) {
            cart = new CartModel({user: userID, products: []})
            cart = await cart.save()
        }

        const product = await ProductModel.findOne({name: req.params.productName})
        if(!product) return res.statusCode(404).send('product not found')

        console.log(product)
        const result = await CartModel.updateOne(
            { _id: cart._id },
            { $push: {products: product._id}}
        )

        return res.send(await CartModel.findOne({user: userID}))
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports = routerCart