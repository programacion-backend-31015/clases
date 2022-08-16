const connectDB = require('../config/db')

class ContedenorDB {

    constructor() {
        this.table = 'products'
    }

    get(cb) {
        const db = connectDB()
        return db.from(this.table).select('*')
            .then( rows => {
                db.destroy()
                return rows
            })
            .catch(err => {db.destroy(); cb(err)})
    }

    insert(body, cb) {
        const db = connectDB()
        return db(this.table).insert(body)
            .then(() => 1)
            .catch(err => {db.destroy(); cb(err)})
    }

}

module.exports = ContedenorDB