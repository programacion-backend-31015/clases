import NoticiaFileDAO from "./file.dao.js"
import NoticiaMemoryDAO from "./memory.dao.js"
import NoticiaMongoDAO from "./mongo.dao.js"

class NoticiaFactoryDAO {
    static get(type) {
        switch (type.toLowerCase()) {
            case 'memory': return new NoticiaMemoryDAO()
            case 'file': return new NoticiaFileDAO(process.cwd() + '/noticia_db.json')
            case 'mongo': return new NoticiaMongoDAO('coderhouse', 'noticias')
            default: return new NoticiaMemoryDAO()
        }
    }
}

export default NoticiaFactoryDAO
