var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log('Firebase connected');

CRUD()

async function CRUD() {
    try {

        const db = admin.firestore()
        const query = db.collection('myCollection')

        // ==================== INSERT ========================================
        let doc = query.doc()
        await doc.create({name: "Again" })

        console.log('Dados ingresados');


        // =============== READ BY ID =================================================

        console.log('Buscamos el documento  (2) => ');
        doc = query.doc("2")
        let item = await doc.get()
        let response = item.data()
        console.log(response);

        // =============== UPDATE =================================================

        console.log('Update el documento  (1) => ');
        doc = query.doc("1")
        item = await doc.update({name: "New Name"})
        console.log('User updated: ', item);

        // =============== Delete =================================================

        console.log('Delete one documento => ');
        doc = query.doc("uvi9nw7HkjSKbZ1qWGJr")
        item = await doc.delete()
        console.log('User deleted: ', item);

        // =============== READ ALL =================================================

        // Ejecutamos la query de find()
        const querySnapshot = await query.get()

        // Conseguimos documentos de la coleccion
        let docs = querySnapshot.docs;
        
        // SOlo conseguimos los datos que nos interesa de los documentos
        response = docs.map(doc => ({
            id: doc.id,
            nombre: doc.data().name,
        }))
        console.log(response);







    } catch(e) {
        console.log('Se presento un error -----------');
        console.log(e);
    }
}
