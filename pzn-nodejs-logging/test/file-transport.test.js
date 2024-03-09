const test = require('test')
const winston = require('winston')

test('File Transport', () => {
  const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: 'application.log',
      }),
      new winston.transports.File({
        level: 'error',
        filename: 'error.log',
      }),
    ],
  })

  logger.info('Hello, Winston! Ini adalah info log.')
  logger.info('Hello, Winston! Ini adalah info log yang kedua kalinya.')
  logger.error('Hello, Winston! Ini adalah error log.')
})
