import NoticiaFactoryDAO from "../model/DAO/noticia.factory.js"
import config from "../config/config.js"

class NoticiaAPI {
    constructor() {
        this.noticiaDAO = NoticiaFactoryDAO.get(config.TYPE_DB)
        console.log(this.noticiaDAO);
    }

    async getNoticias(id) {
        return await this.noticiaDAO.getNoticias(id)
    }

    async insertNoticia(newToInsert) {
        return await this.noticiaDAO.insertNoticia(newToInsert)
    }

}

export default NoticiaAPI