const { insertInto } = require('../../database/db-insert.js');

const postMoviesController = async (req, res) => {
  try {
    const { title, release_year, genre } = req.body;
    let movie = {};
    let movieGenre = [];

    if (title && release_year) {
      movie = (
        await insertInto('movie', { title, release_year }, [
          'id',
          'title',
          'release_year',
        ])
      )[0];
    } else {
      return res.sendClientErrorJson({
        message: 'title and release_year are required',
      });
    }

    if (
      Array.isArray(genre) &&
      genre.length !== 0 &&
      genre.every((name) => typeof name === 'string')
    ) {
      movieGenre = (
        await Promise.all(
          genre.map((name) =>
            insertInto('genre', { name, movie_id: movie.id }, [
              'id',
              'name',
              'movie_id',
            ])
          )
        )
      ).map((genreArr) => genreArr[0]);
    }

    res.json({ movie, movieGenre });
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { postMoviesController };
