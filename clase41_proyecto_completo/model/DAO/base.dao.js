
class NoticiaBaseDAO {

    constructor() { }

    getNoticias = async _id => {throw new Error(`Method getNoticias not implemeted`)}
    insertNoticia = async newToInsert => {throw new Error(`Method insertNoticia not implemeted`)}
    updateNoticia = async (_id, newToUpdate) => {throw new Error(`Method updateNoticia not implemeted`)}
    deleteNoticia = async (_id, newToUpdate) => {throw new Error(`Method deleteNoticia not implemeted`)}

    getNextID(noticias = []) {
        const total = noticias.length

        return total ? parseInt(noticias[total-1]._id) + 1 : 1
    }

    getIndex(_id, noticias) {
        return noticias.findIndex(n => n._id == _id)
    }

}

export default NoticiaBaseDAO