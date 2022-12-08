const winston = require('winston')
// const {
//     createLogger,
//     transports,
//     format
// } = winston

// const { combine, colorize, simple, json, prettyPrint, timestamp, printf} = format
// const logFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} ${level}: ${message}`;
// });

const dotenv = require('dotenv')
const { devLogger, prodLogger } = require('./Loggers')
dotenv.config()

console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV
let logger = null



if(env === "Production"){
    logger= prodLogger()
} else{
    logger = devLogger()
}

// const logger = createLogger({
//     format: combine(
//         colorize(),
//         // prettyPrint(),
//         // json()
//         timestamp({format: "YYYY-MM-DD  HH:mm:ss"}),
//         simple(),
//         logFormat
//     ),
//     transports: [
//         new transports.Console()
//     ]
// })

//logger.error("my first error with winston")
//  logger.info("my first info with winston")
//  logger.warn("my first warn with winston")
//  logger.silly("my first silly with winston")


module.export = logger



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