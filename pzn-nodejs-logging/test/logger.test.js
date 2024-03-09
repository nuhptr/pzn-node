const winston = require('winston')
const test = require('test')

test('Create New Logger', () => {
  const logger = winston.createLogger({
    // will increase the level memories if you not add this line
    // transports: [new winston.transports.Console()],
  })

  logger.log({ level: 'info', message: 'Logger Test!' })
})
