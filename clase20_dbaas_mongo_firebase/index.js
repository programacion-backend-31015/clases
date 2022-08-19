const mongoose = require('mongoose')

// URL de conexion la podemos obtener de Mongo Atlas
const url = 'mongodb+srv://profe_r2:profe_r2@cluster0.rwwegsi.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url,{}, err => {
    if(err) {console.log(err); return}

    console.log('DB connected!!');
})


// Volvemos a las 22:20 arg. Mongo es tu papa !!!
// So sorry for the  music :(
