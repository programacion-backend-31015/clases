const winston = require('winston')

const logger = winston.createLogger({
    level: 'warn',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.Console({level: "verbose"}),
        new winston.transports.File({filename: 'info.log', level: 'error'})
    ]

})

/**
 * silly
 * debug
 * verbose
 * info
 * warn
 * error
 */

 logger.silly('log silly')
 logger.debug('log debug')
 logger.verbose('log verbose')
 logger.info('log info')
 logger.warn('log warn')
 logger.error('log error')