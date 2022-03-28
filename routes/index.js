// routes/index.js
const router = require('express').Router();
const {
  signinValidation,
  signupValidation,
} = require('../middlewares/celebrate');

const auth = require('../middlewares/auth');

const {
  createUser,
  loginUser,
} = require('../controllers/users');

const userRouter = require('./users');
const movieRouter = require('./movies');

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

module.exports = router;
