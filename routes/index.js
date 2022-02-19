// routes/index.js

const router = require('express').Router();
const bodyParser = require('body-parser');

const {
  signinValidation,
  signupValidation,
} = require('../middlewares/celebrate');

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

router.post(
  '/signin',
  signinValidation,
  loginUser,
);

router.post(
  '/signup',
  signupValidation,
  createUser,
);

router.use(auth, userRouter);
router.use(auth, movieRouter);

router.all('*', () => {
  throw new Error('Запрошен несуществующий роутер');
});

router.use(errorLogger);

module.exports = router;
