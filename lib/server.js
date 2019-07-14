'use strict';

const express = require('express');

const notFound = require('../middleware/404.js'); 
const errorHandler = require('../middleware/500.js'); 

const myRoutes = require('../routes/routes.js');
const logger = require('../middleware/logger.js');
const requestTime = require('../middleware/requestTime.js');
const timeLogger = require('../middleware/timeLogger.js');

const app = express();


app.use(express.json());
app.use(logger);
app.use('*', requestTime);
app.use('*', timeLogger);
app.use('/api/v1', myRoutes);
app.use('*', notFound)
app.use (errorHandler);


module.exports = {
  start: (port) => app.listen(port, () => console.log(`up on ${port}`)),
  app: app
}