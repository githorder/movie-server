const Router = require('../../lib/router');

const {
  getMoviesController,
} = require('../../controllers/movies-controllers/get-movies.controller.js');
const {
  postMoviesController,
} = require('../../controllers/movies-controllers/post-movies.controller.js');
const {
  updateMoviesController,
} = require('../../controllers/movies-controllers/put-movies.controller.js');
const {
  deleteMoviesController,
} = require('../../controllers/movies-controllers/delete-movies.controller.js');

const moviesRouter = new Router();

moviesRouter.get('/movies', getMoviesController);
moviesRouter.post('/movies', postMoviesController);
moviesRouter.put('/movies', updateMoviesController);
moviesRouter.delete('/movies', deleteMoviesController);

module.exports = moviesRouter;
