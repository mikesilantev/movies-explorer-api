// utils/config.js
const { NODE_ENV, JWT_SECRET, DB_HOST } = process.env;

const MONGO_URI = NODE_ENV === 'production' ? DB_HOST : 'mongodb://localhost:27017/moviesdb';
const MONGO_CONFIG = ({
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const JWT_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

module.exports = {
  MONGO_URI,
  MONGO_CONFIG,
  JWT_KEY,
};
