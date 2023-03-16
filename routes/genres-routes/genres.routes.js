const Router = require('../../lib/router.js');

const {
  getGenresController,
} = require('../../controllers/genres-controllers/get-genres.controller.js');
const {
  postGenresController,
} = require('../../controllers/genres-controllers/post-genres.controller.js');
const {
  updateGenresController,
} = require('../../controllers/genres-controllers/put-genres.controller.js');
const {
  deleteGenresController,
} = require('../../controllers/genres-controllers/delete-genres.controller.js');

const genresRouter = new Router();

genresRouter.get('/genres', getGenresController);
genresRouter.post('/genres', postGenresController);
genresRouter.put('/genres', updateGenresController);
genresRouter.delete('/genres', deleteGenresController);

module.exports = genresRouter;
