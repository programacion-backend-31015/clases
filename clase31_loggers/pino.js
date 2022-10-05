const logger = require('pino')()

logger.level = 'info'

logger.info('Pino info')
logger.error('That error is horrible')

logger.info('The answer was %d', 42)


logger.info({a: 33}, 'Saludos a Gonzalo')
logger.info({a: {d: 4412, b:72}}, 'Saludos a Gabriel Ignacio')

const childLogger = logger.child({a: 'Property'})
childLogger.info('Log from child')
childLogger.error('Breaking Bad')