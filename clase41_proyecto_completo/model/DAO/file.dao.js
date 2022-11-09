import fs from 'fs'
import NoticiaBaseDAO from './base.dao.js'
import createNoticiaDTO from '../DTO/noticia.dto.js'

class NoticiaFileDAO extends NoticiaBaseDAO {

    constructor(filename) {
        super()
        this.filename = filename
    }

    async read() {
        return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'))
    }
    async write(noticias) {
        return await fs.promises.writeFile(this.filename, JSON.stringify(noticias, null, '\t'))
    }

    getNoticias = async _id => {
        try {
            if (_id) {
                const noticias = await this.read()
                let index = this.getIndex(_id, noticias)

                return index >= 0 ? [noticias[index]] : []
            }

            return await this.read()
        } catch (e) {
            console.log('Error to get noticias', e);

            return []
        }
    }
    insertNoticia = async newToInsert => {
        try {
            const noticias = await this.read()

            const _id = this.getNextID(noticias)
            const datetime = new Date().toLocaleString()
            const newDTO = createNoticiaDTO(newToInsert, _id, datetime)

            noticias.push(newDTO)

            await this.write(noticias)
        } catch (e) {
            console.log('Error to insert noticia', e);

            return []
        }
    }
    //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
    //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }


}

export default NoticiaFileDAO