const test = require('test')
const winston = require('winston')

test('Combine Format', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    level: 'debug',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
  })

  logger.info('Hello Combine Format!')
})
