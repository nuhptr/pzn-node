const winston = require('winston')
const test = require('test')

test('Logging Level With Shorcut', () => {
  const logger = winston.createLogger({
    // add level minimum for logging
    level: 'debug',
    transports: [new winston.transports.Console()],
  })

  logger.error('Hello Error!')
  logger.warn('Hello Warn!')
  logger.info('Hello Info!')
  logger.http('Hello HTTP!')
  logger.verbose('Hello Verbose!')
  logger.debug('Hello Debug!')
  logger.silly('Hello Silly!')
})
