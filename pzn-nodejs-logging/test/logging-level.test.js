const winston = require('winston')
const test = require('test')

test('Logging Level', () => {
  const logger = winston.createLogger({
    // add level minimum for logging
    level: 'debug',
    transports: [new winston.transports.Console()],
  })

  logger.log({ level: 'error', message: 'Hello Error!' })
  logger.log({ level: 'warn', message: 'Hello Warn!' })
  logger.log({ level: 'info', message: 'Hello Info!' })
  logger.log({ level: 'http', message: 'Hello HTTP!' })
  logger.log({ level: 'verbose', message: 'Hello Verbose!' })
  logger.log({ level: 'debug', message: 'Hello Debug!' })
  logger.log({ level: 'silly', message: 'Hello Silly!' })
})
