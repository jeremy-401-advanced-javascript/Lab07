'use strict';

module.exports = (number) => {
  number = number * number;
  return (req, res, next) => {
    req.number = number;
    next();
  }
}