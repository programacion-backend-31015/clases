const log4js = require('log4js')

log4js.configure({
    appenders: {
        myLoggerConsole: {type: "console"},
        myLoggerFile: {type: "file", filename: "info.log"},
        myLoggerFile2: {type: "file", filename: "info2.log"}
    },
    categories: {
        default: {appenders: ['myLoggerConsole', 'myLoggerFile'], level: "trace"},
        consola: {appenders: ['myLoggerConsole'], level: "debug"},
        archivo2: {appenders: ['myLoggerFile2'], level: "info"},
        prod: {appenders: ['myLoggerConsole', 'myLoggerFile2'], level: "error"},
    }
})

/** 
 * trace
 * debug
 * info
 * warn
 * error
 * fatal
 */

const logger = log4js.getLogger('consola')
logger.trace('Cogimos una cerveza')
logger.debug('La cerveza es Corona')
logger.info('La cerveza esta fria')
logger.warn('La cerveza esta caliente')
logger.error('La cerveza se cayo')
logger.fatal('La cerveza se quebro')

const express = require('express')
const app = express()
const typeLog = (process.env.NODE_ENV == "production") ? 'prod' : 'consola'
const logger22 = log4js.getLogger(typeLog)

app.get('/:num?', (req, res) => {
    let num = req.params.num

    if(num == 'favicon.ico') {
        logger22.warn('No es apto para el browser')
        return res.send('ok')
    }

    if(!num) {
        logger22.trace('No viene data num, default 1')
        num = 1
    } else {
        logger22.info(`Num es ${num}`)
    }

    let  result = 0
    if(num != 0) {
        result = 500 / num
    }else {
        logger22.error('Num no puede ser 0')
    }

    logger22.info(`Result is ${result}`)
    res.send({result})
})

app.listen(8080)