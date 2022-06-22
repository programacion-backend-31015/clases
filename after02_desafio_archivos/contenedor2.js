const fs = require('fs')

class Contenedor {
    constructor(filename)  {
        this.filename = filename
    }

    async save(obj) {
        let data = []
        try {
            data = await this.getData()
        } catch(e) {
            console.log('No file')
        }

        let lastID = 1
        if (data.length > 0) {
            lastID = data[data.length-1].id + 1
        }

        obj.id = lastID
        data.push(obj)

        await this.writeData(data)

        return obj
    }

    async deleteById(id) {
        const data = await this.getData()

        const idx = data.findIndex(d => d.id == id)
        const obj = data.splice(idx, 1)
        await this.writeData(data)

        return obj
    }

    getData() {
        return fs.promises.readFile(this.filename,  'utf-8')
            .then(d => JSON.parse(d))
    }

    writeData(data) {
        const str = JSON.stringify(data)
        return  fs.promises.writeFile(this.filename, str)
    }
    
}

module.exports = Contenedor