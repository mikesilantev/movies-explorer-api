// middlewares/errors.js

module.exports = (err, req, res, next) => {
  const { satusCode = 500, message } = err;
  res.status(satusCode).send({
    message: satusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
};
