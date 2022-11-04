const MongoClient = require('./mongoClient')
const FileClient =  require('./fileClient')

class ProductsFactoryDAO {
    static get(type) {
        switch (type) {
            case 'file': return new FileClient('products.json')
            case 'mongo': return new MongoClient()

            default: return new FileClient('products.json')
        }
    }
}

module.exports = ProductsFactoryDAO