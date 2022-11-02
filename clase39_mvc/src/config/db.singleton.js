const mongoose = require('mongoose')
let instance = null

class SingletonClass {
    constructor(){
        const URL = "mongodb://127.0.0.1/coderhouse"
        mongoose.connect(URL)
    }

    static getInstance() {
        if(!instance) {
            instance = new SingletonClass()
        }
        
        return instance
    }

}

module.exports = SingletonClass