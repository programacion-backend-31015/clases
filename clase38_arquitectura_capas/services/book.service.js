const BookModel = require('../models/book.models')
const mongoose = require('mongoose')
const IVA = 0.16

const getBooksService = id => {
    query = {}
    if (id) query = {_id: mongoose.Types.ObjectId(id) }

    return BookModel.find(query)
        .then(result => {
            let data = {}
            if (result.length == 1) {
                dd = result[0]
                price_with_iva = dd.price * (1 + IVA)
                data = {...dd._doc, price_with_iva}

                console.log(data);
            } else {
                data = result
            }

            return data
        })
}

const saveBookService = data => {
    data.name = data.name.toLowerCase()
    return BookModel.create(data)
}

module.exports = {
    getBooksService, saveBookService
}