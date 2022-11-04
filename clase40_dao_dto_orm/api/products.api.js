const ProductsDAO = require('../dao/products.dao')
const ProductDTO = require('../dto/product.dto')
const ProductsFactoryDAO = require('../dao/productFactory')

class ProductsAPI {

    constructor(type_db) {
        const client = ProductsFactoryDAO.get(type_db)
        this.productsDAO = new ProductsDAO(client)
    }

    async add(product) {
        const productAdded = new ProductDTO(await this.productsDAO.add(product))
        
        return productAdded
    }

    async find(id) {
        let products
        if(id) {
            products = await this.productsDAO.getByID(id)
        } else {
            products =  await this.productsDAO.getAll()
        }

        const productsResult = products.map(p => new ProductDTO(p))
        return productsResult
    }

    exit() {
        this.productsDAO.exit()
    }
}

module.exports = ProductsAPI