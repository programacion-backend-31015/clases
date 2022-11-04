
class ProductsDAO {

    constructor(client) {
        this.client = client
        this.client.connect()
    }

    async add(product) {
        return await this.client.add(product)
    }


    async getAll() {
        return await this.client.get()
    }

    async exit() {
        return await this.client.disconnect()
    }

}

module.exports = ProductsDAO