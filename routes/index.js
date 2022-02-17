// routes/index.js

const router = require('express').Router();
const bodyParser = require('body-parser');
const {
  celebrate,
  Joi,
  errors,
  Segments,
} = require('celebrate');

const { requestLogger, errorLogger } = require('../middlewares/logger');

const auth = require('../middlewares/auth');

const {
  createUser,
  loginUser,
} = require('../controllers/users');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.use(requestLogger);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/signin', loginUser);
router.post('/signup', createUser);

router.use(auth, userRouter);
router.use(auth, movieRouter);

router.all('*', () => {
  throw new Error('Запрошен несуществующий роутер');
});

router.use(errorLogger);

module.exports = router;
