const { select, selectWhere } = require('../../database/db-select');

const getGenresController = async (req, res) => {
  try {
    if (req.params.id) {
      const genres = await selectWhere('genre', ['id', 'name', 'movie_id'], {
        id: +req.params.id,
      });

      const [genre] = genres;

      if (!genre) {
        return res.json({});
      }

      return res.json(genre);
    }

    const genres = await select('genre', ['id', 'name', 'movie_id']);

    res.json(genres);
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { getGenresController };
