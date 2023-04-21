require('dotenv').config();
const jwt = require('jsonwebtoken');

function adminMiddleware(req, res, next) {
  const { admin } = req.user;
  console.log(admin);
  if (!admin) {
    return res.status(401).json({ msg: 'Not admin, unauthorized action' });
  }
  next();
}

module.exports = adminMiddleware;
