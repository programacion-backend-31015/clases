const ProductModel = require("../models/products.models")

module.exports = {
    getProductController: async (req, res, next) => {
        try {
            const products = await ProductModel.find()

            res.render('products', { products })
        } catch (error) {
            console.error(error);
            res.send(error)
        }
    },

    getAPIProductController: async (req, res, next) => {
        try {
            const products = await ProductModel.find()

            res.json(products)
        } catch (error) {
            console.error(error);
            res.send(error)
        }
    }
}