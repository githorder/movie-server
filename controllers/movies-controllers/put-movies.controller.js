const { updateWhere } = require('../../database/db-update.js');

const updateMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const { title, release_year } = req.body;

      if (title && release_year) {
        const updatedMovie = (
          await updateWhere(
            'movie',
            {
              id: req.params.id,
            },
            { title, release_year },
            ['id', 'title', 'release_year']
          )
        )[0];

        if (!updatedMovie) {
          return res.sendClientErrorJson({ message: 'Such id does not exist' });
        }
      } else {
        return res.sendClientErrorJson({
          message: 'title and release_year are required',
        });
      }

      return res.json(updatedMovie);
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
