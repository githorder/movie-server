const { updateWhere } = require('../../database/db-update.js');

const updateGenresController = async (req, res) => {
  try {
    if (req.params.id) {
      const { name } = req.body;
      const updatedGenre = (
        await updateWhere('genre', { id: req.params.id }, { name }, [
          'id',
          'name',
        ])
      )[0];

      return res.json(updatedGenre);
    } else {
      res.sendClientErrorJson({
        message: 'You should provide the id of the genre to update',
      });
    }
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { updateGenresController };
