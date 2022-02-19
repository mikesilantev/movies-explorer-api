// routes/movies.js

const movieRouter = require('express').Router();
const {
  createMovieValidation,
} = require('../middlewares/celebrate');


const {
  getAllMovies,
  createNewMovies,
  removeMoviesById,
} = require('../controllers/movies');

movieRouter.get('/movies', getAllMovies);

movieRouter.post(
  '/movies',
  createMovieValidation,
  createNewMovies,
);

movieRouter.delete('/movies/:_id', removeMoviesById);

module.exports = movieRouter;
