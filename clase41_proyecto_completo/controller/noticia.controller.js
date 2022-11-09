import NoticiaAPI from "../api/noticia.api.js"

class NoticiaController {
    constructor() {
        this.noticiaAPI = new NoticiaAPI()
    }

    getNoticias = async(req, res) => {
        try {
            const id = req.params.id
            const noticias = await this.noticiaAPI.getNoticias(id)
            console.log(noticias);

            res.json(noticias)
        } catch (e) {
            console.log('Error controller get ntoicia', e);
        }
    }

    insertNoticia = async(req, res) => {
        try {
            const noticiaToSave = req.body
            const noticiaSaved = await this.noticiaAPI.insertNoticia(noticiaToSave)

            res.json(noticiaSaved)
        } catch (e) {
            console.log('Error controller intsdert ntoicia', e);
        }
    }
}

export default NoticiaController