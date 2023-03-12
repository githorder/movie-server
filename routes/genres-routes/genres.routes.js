const Router = require('../../lib/router.js');

const {
  getGenresController,
} = require('../../controllers/genres-controllers/get-genres.controller.js');
const {
  postGenresController,
} = require('../../controllers/genres-controllers/post-genres.controller.js');

const genresRouter = new Router();

genresRouter.get('/genres', getGenresController);
genresRouter.post('/genres', postGenresController);
genresRouter.put('/genres', () => {});
genresRouter.delete('/genres', () => {});

module.exports = genresRouter;
