const express = require("express");
const { devLogger, prodLogger } = require("./Loggers")
require("dotenv").config()

const env = process.env.NODE_ENV
let logger = null;

if (env === "dev") {
      logger = devLogger()
}else{
      logger = prodLogger()
}

const app = express()



app.listen(process.env.PORT, ()=>logger.info(`app started on port: ${process.env.PORT}`))