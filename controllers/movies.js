// controllers/movies.js

const Movie = require('../models/movie');

// возвращает все сохранённые текущим  пользователем фильмы
const getAllMovies = (req, res, next) => {
  const ownerId = req.user._id;

  Movie.find({ ownerId })
    .populate('owner')
    .orFail(() => {
      console.log('controllers/movies.js orFail getAllMovies');
    })
    .then((movies) => {
      res.status(200).send(movies);
      console.log(movies);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
// создаёт фильм с переданными в теле
// country, director, duration, year
// description, image, trailer, nameRU, nameEN и thumbnail, movieId
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
      next(err);
    });
};

// удаляет сохранённый фильм по id
const removeMoviesById = (req, res, next) => {

};

module.exports = {
  getAllMovies,
  createNewMovies,
};
