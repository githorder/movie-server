const { delWhere } = require('../../database/db-delete.js');

const deleteMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const deletedGenres = await delWhere(
        'genre',
        { movie_id: req.params.id },
        ['id', 'name']
      );

      const deletedMovie = (
        await delWhere(
          'movie',
          {
            id: req.params.id,
          },
          ['id', 'title', 'release_year']
        )
      )[0];

      if (!deletedMovie) {
        return res.sendClientErrorJson({ message: 'Such id does not exist' });
      }

      return res.json({ deletedMovie, deletedGenres });
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
