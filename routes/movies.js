// routes/movies.js

const movieRouter = require('express').Router();

const {
  getAllMovies,
  createNewMovies,
} = require('../controllers/movies');

movieRouter.get('/movies', getAllMovies);
movieRouter.post('/movies', createNewMovies);

module.exports = movieRouter;
