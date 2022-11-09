import express from 'express'
import NoticiaController from '../controller/noticia.controller.js'

const router = express.Router()

class NoticiaRouter {

    constructor() {
        this.noticiaController = new NoticiaController()
    }

    start() {
        router.get('/:id?', this.noticiaController.getNoticias)
        router.post('/', this.noticiaController.insertNoticia)

        return router
    }

}

export default NoticiaRouter