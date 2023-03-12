const { select, selectWhere } = require('../../database/db-select.js');

const getMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const movie = await selectWhere(
        'movie',
        ['id', 'title', 'release_year'],
        {
          id: req.params.id,
        }
      );
      return res.json(movie);
    }

    const moveis = await select('movie', ['id', 'title', 'release_year']);
    res.json(moveis);
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { getMoviesController };
