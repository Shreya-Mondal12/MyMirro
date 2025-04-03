const jwt = require('jsonwebtoken');
const config = require('../config/default');

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRY || '7d' }
  );
};

module.exports = generateToken;