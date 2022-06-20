const fs = require('fs')

class Contenedor {

    constructor(filename) {
        this.filename = filename
        
        this.products = []
        this.nextID = 1
    }

    async init() {
        try {
            const data = await this.readFile()
            if (data.length > 0) {
                this.products = data
                this.nextID = this.products[data.length-1].id + 1
                console.log('Data loaded from file')
            }
        } catch(e) {
            console.log('No se pudo leer la data')
        }
    }

    async save(obj) {
        obj.id = this.nextID
        this.products.push(obj)
        this.nextID++

        try{
            await this.saveFile()
        } catch(e) {
            console.log(e)
        }
    }

    getAll() {
        return this.products
    }

    saveFile() {
        return fs.promises.writeFile(this.filename, JSON.stringify(this.products))
    }

    getById(id) {
        const data = this.products.find(p => p.id == id)
        
        return data ? data : null
    }

    async deleteById(id) {
        const idx = this.products.findIndex(p => p.id == id)
        this.products.splice(idx, 1)

        try{
            await this.saveFile()
        } catch(e) {
            console.log(e)
        }
    }

    readFile() {
        return fs.promises.readFile(this.filename, 'utf-8')
            .then(data => JSON.parse(data))
    }

}

module.exports = Contenedor