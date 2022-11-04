const DbClient = require('./db_client')
const Config = require('../config/config')
const fs = require('fs')


class FileClient extends DbClient {

    constructor(filename) {
        super()
        this.filename = filename
    }

    async connect() {
        console.log('File initialized');
    }

    async disconnect() {
        console.log('File finished');
    }

    async read() {
        return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'))
    }

    async save(data) {
        await fs.promises.writeFile(this.filename, JSON.stringify(data))
    }


    async add(product) {
        try {
            const products = await this.read()
            const _id = this.getNextID(products)
            product._id = _id
            products.push(product)

            await this.save(products)

            return product
        } catch (e) {
            throw new Error('error to add file ', e)
        }
    }

    async get() {
        try {
            const products = await this.read()

            return products
        } catch (e) {
            throw new Error('error to get file ', e)
        }
    }

}

module.exports = FileClient

