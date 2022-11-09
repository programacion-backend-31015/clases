import fs from 'fs'
import NoticiaBaseDAO from './base.dao.js'
import createNoticiaDTO from '../DTO/noticia.dto.js'

class NoticiaMemoryDAO extends NoticiaBaseDAO {

    constructor() {
        super()
        this.noticias = []
    }

    getNoticias = async _id => {
        try {
            if (_id) {
                let index = this.getIndex(_id, this.noticias)

                return index >= 0 ? [this.noticias[index]] : []
            }
            console.log(this.noticias);
            return this.noticias
        } catch (e) {
            console.log('Error to get noticias', e);

            return []
        }
    }
    insertNoticia = async newToInsert => {
        try {
            const _id = this.getNextID(this.noticias)
            const datetime = new Date().toLocaleString()
            const newDTO = createNoticiaDTO(newToInsert, _id, datetime)

            this.noticias.push(newDTO)

            return newDTO
        } catch (e) {
            console.log('Error to insert noticia', e);

            return []
        }
    }
    //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
    //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }


}

export default NoticiaMemoryDAO