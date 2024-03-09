const winston = require('winston')
const test = require('test')

test('Format', () => {
  const logger = winston.createLogger({
    // add level minimum for logging
    level: 'debug',
    // add format for logging
    format: winston.format.simple(),
    // format: winston.format.json(),
    // format: winston.format.logstash(),
    transports: [new winston.transports.Console()],
  })

  logger.info('Hello Format!')
})

test('Printf Format', () => {
  const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.printf((log) => {
      //   return JSON.stringify(log)
      return `${new Date()}: ${log.level.toUpperCase()}: ${log.message}`
    }),
    transports: [new winston.transports.Console()],
  })

  logger.info('Hello Printf Format!')
  logger.warn('Hello Printf Format!')
  logger.error('Hello Printf Format!')
})
