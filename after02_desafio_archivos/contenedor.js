const fs = require('fs')

class Contenedor {
    constructor(filename)  {
        this.filename = filename
    }

    save(obj) {
        return this.getData()
            .then( data => {
                let lastID = 1
                if (data.length > 0) {
                    lastID = data[data.length-1].id + 1
                }

                obj.id = lastID
                data.push(obj)

                return this.writeData(data)
            })
            .then(() => obj)
            .catch(e => {
                obj.id = 1
                return this.writeData([obj]).then(() => obj)
            })
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