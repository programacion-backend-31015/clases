import mongodb from 'mongodb'
import NoticiaBaseDAO from './base.dao.js'
import createNoticiaDTO from '../DTO/noticia.dto.js'

class NoticiaMongoDAO extends NoticiaBaseDAO {

    constructor(database, collection) {
        super();
        (async () => {
            console.log('Connecting mongo DB ...');

            const connection = await mongodb.MongoClient.connect('mongodb://127.0.0.1', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            
            const db = connection.db(database)
            this._collection = db.collection(collection)
        })();
    }

    getNoticias = async _id => {
        try {
            if (_id) {
                const newOne = await this._collection.findOne({
                    _id: mongodb.ObjectId(_id)
                })

                return [newOne]
            } 

            return await this._collection.find({}).toArray();
        } catch (e) {
            console.log('Error to get noticias', e);

            return []
        }
    }
    insertNoticia = async newToInsert => {
        try {
            await this._collection.insertOne(newToInsert)
            
            return newToInsert
        } catch (e) {
            console.log('Error to insert noticia', e);

            return newToInsert
        }
    }
    //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
    //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }

}

export default NoticiaMongoDAO