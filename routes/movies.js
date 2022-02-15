// routes/movies.js

const movieRouter = require('express').Router();

const {
  getAllMovies,
  createNewMovies,
  removeMoviesById,
} = require('../controllers/movies');

movieRouter.get('/movies', getAllMovies);
movieRouter.post('/movies', createNewMovies);
movieRouter.delete('/movies/:_id', removeMoviesById);

module.exports = movieRouter;
