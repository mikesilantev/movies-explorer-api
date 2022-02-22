// controllers/movies.js
// переделать создание фильма

const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');
const ForbiddenError = require('../errors/ForbiddenError');
// возвращает все сохранённые текущим  пользователем фильмы
const getAllMovies = (req, res, next) => {
  const ownerId = req.user._id;

  Movie.find({ ownerId })
    .populate('owner')
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным _id не найден.');
    })
    .then((movies) => {
      res.status(200).send(movies);
      console.log(movies);
    })
    .catch((err) => {
      next(err);
    });
};
// создаёт фильм с переданными в теле
const createNewMovies = (req, res, next) => {
  Movie.create({
    owner: req.user._id,
    country: req.body.country,
    director: req.body.director,
    duration: req.body.duration,
    year: req.body.year,
    description: req.body.description,
    image: req.body.image,
    trailer: req.body.trailer,
    nameRU: req.body.nameRU,
    nameEN: req.body.nameEN,
    thumbnail: req.body.thumbnail,
    movieId: req.body.movieId,
  })
    .then((movie) => {
      res.status(201).send({
        owner: movie.owner,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Ошибка ввода данных'));
      } else {
        next(err);
      }
    });
};

// удаляет сохранённый фильм по id
const removeMoviesById = (req, res, next) => {
  const { _id } = req.params;
  const ownerId = req.user._id;

  Movie.findById(_id)
    .orFail(() => {
      throw new NotFoundError('Нет фильма с указанным id');
    })
    .then((movie) => {
      if (!movie.owner.includes(ownerId)) {
        next(new ForbiddenError('Вы пытаетесь удалить чужой фильм'));
      } else {
        Movie.findByIdAndRemove(_id)
          .then((removeCard) => {
            res.status(200).send(removeCard);
          })
          .catch(next);
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getAllMovies,
  createNewMovies,
  removeMoviesById,
};
