const { updateWhere } = require('../../database/db-update.js');

const updateMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const newData = req.body;
      const updatedMovies = await updateWhere(
        'movie',
        {
          id: req.params.id,
        },
        newData,
        ['id', 'title', 'release_year']
      );

      if (!updatedMovies.length) {
        return res.sendClientErrorJson({ message: 'Such id does not exist' });
      }

      return res.json(updatedMovies[0]);
    } else {
      res.sendClientErrorJson({
        message: 'You should provide the id of the movie to update',
      });
    }
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { updateMoviesController };
