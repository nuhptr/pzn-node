const winston = require('winston')
// call the transportStream from winston-transport
const TransportStream = require('winston-transport')
const winstonDailyRotateFile = require('winston-daily-rotate-file')
const test = require('test')

test('Create New Custom Transport', function () {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option)
    }

    log(info, next) {
      console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`)
      next()
    }
  }

  const logger = winston.createLogger({
    level: 'silly',
    transports: [new MyTransport({})],
  })

  logger.info('Hello World')
})
