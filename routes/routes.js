'use strict';

const express = require('express');
const errorOnD = require('../middleware/errorOnD.js');
const squareNumber = require('../middleware/squareNumber.js');
const logSquare = require('../middleware/squareNumber.js');

const router = express.Router();



router.get('/a', myHandler);
router.get('/b', squareNumber(4), mySqaure);
router.get('/c', myHandler);
router.get('/d', errorOnD, myHandler);

function  myHandler(req, res) {
  res.status(200).send('My handler request');
}

function mySqaure(req, res) {
  res.status(200).send(`Route B, ${req.number}`);
  console.log(req.number);
}

module.exports = router;