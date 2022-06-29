const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const mensajes = [
    {id: 1, emisor: "r2", body: "Esto es un mensaje"},
    {id: 2, emisor: "diego", body: "Esto es otro"}
]

app.get('/api/mensajes', (req, res) => {

    if( Object.entries(req.query).length > 0 ) {
        console.log(req.query.emisor);
        const mensaje = mensajes.find(m => m.id == req.query.id)
        res.json(mensaje) 
    } else {
        res.json(mensajes)
    }

})

app.post('/api/mensajes', (req, res) => {
    console.log('POST recibido');
    console.log(req.body);

    mensajes.push(req.body)

    res.json("Se agrega nuevo mensaje")
})

app.put('/api/mensajes/:id', (req, res) => {
    console.log('PUT recibido');
    console.log(req.body);

    res.json("Actualizar nuevo mensaje " + req.params.id)
})

app.delete('/api/mensajes/:id', (req, res) => {
    console.log('DEL recibido');

    res.json("Borrando mensaje " + req.params.id)
})




app.listen(8080)