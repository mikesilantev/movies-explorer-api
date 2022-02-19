// middlewares/auth.js
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../utils/config');

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Error('Необходима авторизация');
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new Error('Необходима авторизация');
  }

  req.user = payload;
  next();
};
