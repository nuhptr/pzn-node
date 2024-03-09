const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: 'rejection.json',
    }),
  ],
})

async function callAsync() {
  return Promise.reject('Ups')
}

callAsync()
