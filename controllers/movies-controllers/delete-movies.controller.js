const { delWhere } = require('../../database/db-delete.js');

const deleteMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const deletedMovies = await delWhere(
        'movie',
        {
          id: req.params.id,
        },
        ['id', 'title', 'release_year']
      );

      if (!deletedMovies.length) {
        return res.sendClientErrorJson({ message: 'Such id does not exist' });
      }

      return res.json(deletedMovies[0]);
    } else {
      res.sendClientErrorJson({
        message: 'You should provide the id of the movie to delete',
      });
    }
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { deleteMoviesController };
