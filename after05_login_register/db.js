const mongoose = require("mongoose");

function connectDB(cb) {
    mongoose.connect(
        'mongodb://localhost:27017/coderhouse22',
        {useNewUrlParser: true, useUnifiedTopology: true},
        err => {
            if(!err) console.log('DB connected')
            cb(err)
        }
    )
}

module.exports = connectDB