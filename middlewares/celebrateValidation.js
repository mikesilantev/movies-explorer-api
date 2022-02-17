// middlewares//celebrateValidation.js
const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

// signin routes validation
const signinValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(30),
  }),
});

// signup routes validation
const signupValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .regex(/^[a-z0-9_-]{8,}$/),
    name: Joi.string().regex(/^[a-z0-9_-]{2,30}$/),
  }),
});

module.exports = {
  signinValidation,
  signupValidation,
};
