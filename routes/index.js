// routes/index.js

const router = require('express').Router();
const bodyParser = require('body-parser');
const {
  celebrate,
  Joi,
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

router.post(
  '/signin',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(30),
    }),
  }),
  loginUser,
);

router.post(
  '/signup',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string()
        .required()
        .regex(/^[a-z0-9_-]{8,}$/),
      name: Joi.string().regex(/^[a-z0-9_-]{2,30}$/),
    }),
  }),
  createUser,
);

router.use(auth, userRouter);
router.use(auth, movieRouter);

router.all('*', () => {
  throw new Error('Запрошен несуществующий роутер');
});

router.use(errorLogger);

module.exports = router;
