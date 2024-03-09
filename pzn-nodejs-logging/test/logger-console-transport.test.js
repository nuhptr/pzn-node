const winston = require('winston')
const test = require('test')

test('Create Console Transport', () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
  })

  logger.log({ level: 'info', message: 'Hello distributed log files!' })
})
