// utils/config.js
const { NODE_ENV, DB_HOST } = process.env;
const MONGO_URI = NODE_ENV !== 'production' ? DB_HOST : 'mongodb://localhost:27017/moviesdb';

const mongoConfig = ({
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});

module.exports = {
  MONGO_URI,
  mongoConfig,
};
