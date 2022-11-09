import express from 'express'
import config from './config/config.js'
import NoticiaRouter from './routes/noticia.router.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const noticiaRouter = new NoticiaRouter()

app.use('/noticias', noticiaRouter.start())

const server = app.listen(config.PORT, ()  => {
    console.log(`Server listen on ${config.PORT} (${config.NODE_ENV} - ${config.TYPE_DB})`);
})
server.on('error', e => console.log(e))