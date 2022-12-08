const winston = require('winston')
const {
    createLogger,
    transports,
    format
} = winston

const { combine, colorize, simple, json, prettyPrint, timestamp, printf} = format
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        colorize(),
        // prettyPrint(),
        // json()
        timestamp({format: "YYYY-MM-DD  HH:mm:ss"}),
        simple(),
        logFormat
    ),
    transports: [
        new transports.Console()
    ]
})

logger.error("my firset error with winston")
logger.info("my firset info with winston")
logger.warn("my firset warn with winston")
logger.silly("my first silly with winston")




// Logging levels in winston conform to the severity ordering specified by 
// RFC5424: severity of all levels is assumed to be numerically ascending 
// from most important to least important

// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
// };