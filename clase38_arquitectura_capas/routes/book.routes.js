const { Router } = require('express')
const { getBooksController, saveBooksController } = require('../controller/book.controller')

const bookRouter = new Router()

bookRouter.get('/', getBooksController)
bookRouter.post('/', saveBooksController)

module.exports = { bookRouter }