const winston = require('winston')
const winstonDailyRotateFile = require('winston-daily-rotate-file')
const test = require('test')

test('Logging With Daily Rotate', function () {
  const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({}),
      new winstonDailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '2m',
        maxFiles: '2d',
      }),
    ],
  })

  for (let index = 0; index < 100; index++) {
    logger.info(`Hello Logger ${index}`)
  }
})
