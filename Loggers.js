const winston = require("winston")
const {
    createLogger,
    transports,
    format
} = winston

const {
    combine,
    colorize,
    timestamp,
    printf,
    errors
} = format

const logFormat = printf(({
    level,
    message,
    stack,
    timestamp
}) => {
    return `[${timestamp}]: ${level} ${ stack || message}`
})


exports = {
    devLogger: () => {
        return createLogger({
            format: combine(
                colorize(),
                timestamp({
                    format: "YYYY-MM-DD HH:mm:ss"
                }),
                errors({
                    stack: true
                }),
                logFormat
            ),
            transports: [new transports.Console(),
                new transports.File({
                    filename: "Logging/logs.txt"
                })
            ]
        })
    },
    prodLogger: () => {
        return createLogger({
            format: combine(
                timestamp({
                    format: "YYYY-MM-DD HH:mm:ss"
                }),
                logFormat
            ),
            transports: [
                new transports.Console(),
                new transports.File({filename: "Logging/logs.txt"})
            ]

        })
    }
}

