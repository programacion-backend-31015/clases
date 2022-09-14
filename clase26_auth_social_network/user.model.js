const mongoose = require('mongoose')

const UserSchema = new  mongoose.Schema({
    google: {
        id: {type: String},
        name: {type: String},
        email: {type: String},
    }
})

const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel