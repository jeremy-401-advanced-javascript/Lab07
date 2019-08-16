"use strict";

const express = require("express");

const notFound = require("../middleware/404.js");
const errorHandler = require("../middleware/500.js");

const myRoutes = require("../routes/routes.js");
const logger = require("../middleware/logger.js");
const requestTime = require("../middleware/requestTime.js");
const timeLogger = require("../middleware/timeLogger.js");
const myHandler = require("../middleware/myHandler.js");
const squareNumber = require("../middleware/squareNumber.js");

const app = express();

app.use(express.json());
app.use(logger);
app.use("*", requestTime);
app.use("*", timeLogger);
app.use("/api/v1", myRoutes);

app.get("/api/v1/a", myHandler);
app.get("/api/v1/b", squareNumber(4), mySqaure);

function mySqaure(req, res) {
  res.status(200).send(`Route B, ${req.number}`);
  console.log(req.number);
}

app.use("*", notFound);
app.use(errorHandler);

module.exports = {
  start: port => app.listen(port, () => console.log(`up on ${port}`)),
  app: app
};
