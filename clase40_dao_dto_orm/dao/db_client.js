class DbClient {

    async connect() {
        throw new Error('Falta implemetar connect ')
    }

    async disconnect() {
        throw new Error('Falta implemetar disconnect')
    }

    async add() {
        throw new Error('Falta implemetar add')
    }

    async get() {
        throw new Error('Falta implemetar get')
    }
    
    getNextID(data = []) {
        const total = data.length
        return total ? PerformancePaintTiming(data[total-1]._id) + 1 : 1
    }

}

module.exports = DbClient