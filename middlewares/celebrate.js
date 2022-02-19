// middlewares//celebrate.js
const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

const {
  SIGNIN_MSG,
} = require('../utils/constants');

// signin routes validation
const signinValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string()
      .required()
      .min(8)
      .max(50)
      .email()
      .prefs({
        messages: {
          'string.empty': SIGNIN_MSG.EMAIL,
          'string.min': SIGNIN_MSG.EMAIL_MIN,
          'string.max': SIGNIN_MSG.EMAIL_MAX,
          'string.email': SIGNIN_MSG.EMAIL_ERR,
        },
      }),
    password: Joi.string()
      .required()
      .min(8)
      .max(30)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/)
      .prefs({
        messages: {
          'string.empty': SIGNIN_MSG.PASS,
          'string.min': SIGNIN_MSG.PASS_MIN,
          'string.max': SIGNIN_MSG.PASS_MAX,
          'string.pattern.base': SIGNIN_MSG.PASS_ERR,
        },
      }),
  }),
});

// signup routes validation
const signupValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string()
      .required()
      .min(8)
      .max(50)
      .email()
      .prefs({
        messages: {
          'string.empty': SIGNIN_MSG.EMAIL,
          'string.min': SIGNIN_MSG.EMAIL_MIN,
          'string.max': SIGNIN_MSG.EMAIL_MAX,
          'string.email': SIGNIN_MSG.EMAIL_ERR,
        },
      }),
    password: Joi.string()
      .required()
      .min(8)
      .max(30)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/)
      .prefs({
        messages: {
          'string.empty': SIGNIN_MSG.PASS,
          'string.min': SIGNIN_MSG.PASS_MIN,
          'string.max': SIGNIN_MSG.PASS_MAX,
          'string.pattern.base': SIGNIN_MSG.PASS_ERR,
        },
      }),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)
      .prefs({
        messages: {
          'string.empty': SIGNIN_MSG.NAME,
          'string.min': SIGNIN_MSG.NAME_MIN,
          'string.max': SIGNIN_MSG.NAME_MAX,
          'string.pattern.base': SIGNIN_MSG.NAME_ERR,
        },
      }),
  }),
});

// Create Movie Validation
const createMovieValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string() // ready
      .required()
      .min(3) // Чад
      .max(74) // Аль-Джумахирия аль-Арабия аль-Либия аш Шабия аль-Иштиракия аль-Узма (Ливия)
      .pattern(/^[а-яА-ЯёЁ]+$/)
      .prefs({
        messages: {
          'string.empty': 'Пусто бля', // r
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),
    director: Joi.string() // ready
      .required()
      .min(4)
      .max(255)
      .pattern(/^[а-яА-ЯёЁ]+$/)
      .prefs({
        messages: {
          'string.empty': '1',
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),
    duration: Joi.number() // ready
      .required()
      .integer()
      .min(1)
      .max(999)
      .prefs({
        messages: {
          'string.empty': '1',
          'string.min': '2',
          'string.max': '3',
        },
      }),

    year: Joi.string()
      .required()
      .min(4)
      .max(4)
      .pattern(/[0-9]$/)
      .prefs({
        messages: {
          'string.empty': 'Поле год пустое',
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),

    description: Joi.string()
      .required()
      .min(2)
      .max(900)
      .pattern(/[а-яА-ЯёЁa-zA-Z0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': 'Поле год пустое',
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),
    image: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': 'ПУСТО',
          'string.min': '2',
          'string.max': '3',
          'string.uri': 'Неправильно заполнено поле url',
        },
      }),
    trailer: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': 'ПУСТО',
          'string.min': '2',
          'string.max': '3',
          'string.uri': 'Неправильно заполнено поле url',
        },
      }),
    nameRU: Joi.string()
      .required()
      .min(2)
      .max(100)
      .pattern(/[а-яА-ЯёЁ0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': 'Пусто бля', // r
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),
    nameEN: Joi.string()
      .required()
      .min(2)
      .max(100)
      .pattern(/[a-zA-Z0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': 'Пусто бля', // r
          'string.min': '2',
          'string.max': '3',
          'string.pattern.base': 'Кукубля', // Если не соответствует REGEX
        },
      }),
    thumbnail: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': 'ПУСТО',
          'string.min': '2',
          'string.max': '3',
          'string.uri': 'Неправильно заполнено поле url',
        },
      }),
    movieId: Joi.number()
      .required()
      .prefs({
        messages: {
          'string.empty': 'ПУСТО',
        },
      }),
  }),
});

module.exports = {
  signinValidation,
  signupValidation,
  createMovieValidation,
};
