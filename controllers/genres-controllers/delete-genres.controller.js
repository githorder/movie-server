const { delWhere } = require('../../database/db-delete.js');

const deleteGenresController = async (req, res) => {
  try {
    if (req.params.id) {
      const deletedGenres = await delWhere(
        'genre',
        { movie_id: req.params.id },
        ['id', 'name']
      );

      return res.json(deletedGenres);
    } else {
      res.sendClientErrorJson({
        message: 'You should provide the id of the genre to delete',
      });
    }
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { deleteGenresController };
