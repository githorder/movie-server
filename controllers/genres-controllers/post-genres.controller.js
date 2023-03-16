const { insertInto } = require('../../database/db-insert');

const postGenresController = async (req, res) => {
  try {
    if (req.body.name) {
      const { name, movie_id } = req.body;
      const newGenre = (
        await insertInto('genre', { name, movie_id }, [
          'id',
          'name',
          'movie_id',
        ])
      )[0];
      return res.json(newGenre);
    }

    res.sendClientError({ message: 'You should provide name of the genre' });
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { postGenresController };
