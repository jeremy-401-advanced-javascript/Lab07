module.exports = (req, res, next) => {
  console.log('this is the path', req.path);
  next();
}