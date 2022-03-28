// middlewares//celebrate.js
const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

const {
  SIGNIN_MSG,
  CREATE_MOVIE_MSG,
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
          'string.empty': CREATE_MOVIE_MSG.COUNTRY,
          'string.min': CREATE_MOVIE_MSG.COUNTRY_MIN,
          'string.max': CREATE_MOVIE_MSG.COUNTRY_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.COUNTRY_ERR,
        },
      }),
    director: Joi.string() // ready
      .required()
      .min(4)
      .max(255)
      .pattern(/[а-яА-ЯёЁ0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.DIRECTOR,
          'string.min': CREATE_MOVIE_MSG.DIRECTOR_MIN,
          'string.max': CREATE_MOVIE_MSG.DIRECTOR_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.DIRECTOR_ERR, // Если не соответствует REGEX
        },
      }),
    duration: Joi.number() // ready
      .required()
      .integer()
      .min(1)
      .max(999)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.DURATION,
          'string.min': CREATE_MOVIE_MSG.DURATION_MIN,
          'string.max': CREATE_MOVIE_MSG.DURATION_MAX,
        },
      }),

    year: Joi.string()
      .required()
      .min(4)
      .max(4)
      .pattern(/[0-9]$/)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.YEAR,
          'string.min': CREATE_MOVIE_MSG.YEAR_MIN,
          'string.max': CREATE_MOVIE_MSG.YEAR_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.YEAR_ERR, // Если не соответствует REGEX
        },
      }),

    description: Joi.string()
      .required()
      .min(2)
      .max(900)
      .pattern(/[а-яА-ЯёЁa-zA-Z0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.DESCRIPTION,
          'string.min': CREATE_MOVIE_MSG.DESCRIPTION_MIN,
          'string.max': CREATE_MOVIE_MSG.DESCRIPTION_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.DESCRIPTION_ERR, // Если не соответствует REGEX
        },
      }),
    image: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.IMAGE,
          'string.min': CREATE_MOVIE_MSG.IMAGE_MIN,
          'string.max': CREATE_MOVIE_MSG.IMAGE_NAX,
          'string.uri': CREATE_MOVIE_MSG.IMAGE_ERR,
        },
      }),
    trailerLink: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.TRAILER,
          'string.min': CREATE_MOVIE_MSG.TRAILER_MIN,
          'string.max': CREATE_MOVIE_MSG.TRAILER_MAX,
          'string.uri': CREATE_MOVIE_MSG.TRAILER_ERR,
        },
      }),
    nameRU: Joi.string()
      .required()
      .min(2)
      .max(100)
      .pattern(/[а-яА-ЯёЁ0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.NAMERU, // r
          'string.min': CREATE_MOVIE_MSG.NAMERU_MIN,
          'string.max': CREATE_MOVIE_MSG.NAMERU_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.NAMERU_ERR, // Если не соответствует REGEX
        },
      }),
    nameEN: Joi.string()
      .required()
      .min(2)
      .max(100)
      .pattern(/[a-zA-Z0-9+&=*:"'@!#$%;?(),-.]/)
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.NAMEEN, // r
          'string.min': CREATE_MOVIE_MSG.NAMEEN_MIN,
          'string.max': CREATE_MOVIE_MSG.NAMEEN_MAX,
          'string.pattern.base': CREATE_MOVIE_MSG.NAMEEN_ERR, // Если не соответствует REGEX
        },
      }),
    thumbnail: Joi.string()
      .required()
      .min(12)
      .max(256)
      .uri()
      .prefs({
        messages: {
          'string.empty': CREATE_MOVIE_MSG.THUMBNAIL,
          'string.min': CREATE_MOVIE_MSG.THUMBNAIL_MIN,
          'string.max': CREATE_MOVIE_MSG.THUMBNAIL_MAX,
          'string.uri': CREATE_MOVIE_MSG.THUMBNAIL_ERR,
        },
      }),
    movieId: Joi.number()
      .required(),
  }),
});

module.exports = {
  signinValidation,
  signupValidation,
  createMovieValidation,
};
