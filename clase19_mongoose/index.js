const mongoose = require('mongoose')
const UserModel = require('./models/user')

CRUD()

async function CRUD() {

    try {
        const URL = 'mongodb://localhost:27017/testing'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB connected');

        //--------------------------------------
        //----------- CREATE -------------------
        //--------------------------------------
        console.log('CREATE');
        let user = {
            name: 'Nicolas',
            lastname: 'Di Marco',
            email: 'nicolas@hotmail.com',
            username: 'nico',
            age: 15
        }
        const userModel = new UserModel(user)
        const userSaved = await userModel.save()
        console.log(userSaved);

        //--------------------------------------
        //----------- READ ALL -----------------
        //--------------------------------------
        console.log('READ ALL');
        let users = await UserModel.find({})
        console.log(users);

        //--------------------------------------
        //----------- UPDATE--------------------
        //--------------------------------------
        console.log('UPDATE');
        const userUpdated = await UserModel.updateOne(
            {name: 'Nicolas'},
            {$set: {age: 16}}
        )
        console.log(userUpdated);

        //--------------------------------------
        //----------- READ ---------------------
        //--------------------------------------
        console.log('READ ONE');
        user = await UserModel.find({age: 16})
        console.log(user);

        //--------------------------------------
        //----------- DELETE -------------------
        //--------------------------------------
        console.log('DELETE');
        let userDeleted = await UserModel.deleteOne({age: 15})
        console.log(userDeleted);

        console.log('READ ALL');
        users = await UserModel.find({})
        console.log(users);

        //--------------------------------------
        //----------- CREATE MANY --------------
        //--------------------------------------
        console.log('CREATE MANY');
        new UserModel({
            name: 'Romina',
            lastname: 'Voscio',
            email: 'romina@gmial.com',
            username: 'romina',
            age: 30
        }).save()
        new UserModel({
            name: 'Gonzalo',
            lastname: 'Isa',
            email: 'gonzaso@outlook.com',
            username: 'gonzalo',
            age: 33
        }).save()


        //--------------------------------------
        //----------- READ FILTER --------------
        //--------------------------------------
        console.log('READ ALL');
        console.log(await UserModel.find({lastname: 'Isa'}, {name: 1, email: 1, _id: 0}));

        console.log(await UserModel.find({}, {name: 1, _id: 0}).sort({age: -1}).skip(5));

        console.log(await UserModel.find({}, {name: 1, _id: 0}).sort({age: -1}).limit(3));

    } catch(e) {
        console.log('Hubo un error::', e);
    }

}