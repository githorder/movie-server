const { insertInto } = require('../../database/db-insert.js');

const postMoviesController = async (req, res) => {
  try {
    const data = req.body;
    const insertedMovies = await insertInto('movie', data, [
      'id',
      'title',
      'release_year',
    ]);
    res.json(insertedMovies[0]);
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { postMoviesController };
