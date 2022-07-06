const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const fakeApi = () => [
    {name: 'Beers', price: 120},
    {name: 'Ron', price: 80},
    {name: 'Fernet', price: 115},
    {name: 'Whisky', price: 150}
]

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('main', {
        products: fakeApi(),
        listExists: true
    })
})

app.listen(8080)

// twig
// ejs <-----



