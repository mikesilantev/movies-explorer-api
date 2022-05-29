// middlewares/auth.js
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../utils/constants');

const UnauthorizedError = require('../errors/UnauthorizedError');

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  const token = extractBearerToken(authorization);

  let payload;
  // eslint-disable-next-line no-debugger
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  req.user = payload;
  next();
};
