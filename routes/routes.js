'use strict';

const express = require('express');
const errorOnD = require('../middleware/errorOnD.js');
const myHandler = require('../middleware/myHandler.js');

const router = express.Router();

router.get('/c', myHandler);
router.get('/d', errorOnD, myHandler);

module.exports = router;