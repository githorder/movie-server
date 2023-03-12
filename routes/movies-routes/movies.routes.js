const Router = require('../../lib/router');

const {
  getMoviesController,
} = require('../../controllers/movies-controllers/get-movies.controller.js');
const {
  postMoviesController,
} = require('../../controllers/movies-controllers/post-movies.controller.js');

const moviesRouter = new Router();

moviesRouter.get('/movies', getMoviesController);
moviesRouter.post('/movies', postMoviesController);
moviesRouter.put('/movies', () => {});
moviesRouter.delete('/movies', () => {});

module.exports = moviesRouter;
