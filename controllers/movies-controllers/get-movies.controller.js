const { select, selectWhere } = require('../../database/db-select.js');

const getMoviesController = async (req, res) => {
  try {
    if (req.params.id) {
      const movie = (
        await selectWhere('movie', ['id', 'title', 'release_year'], {
          id: req.params.id,
        })
      )[0];

      const genres = await selectWhere('genre', ['id', 'name'], {
        movie_id: movie.id,
      });

      return res.json({
        movie: movie ? movie : {},
        genres: genres.length !== 0 ? genres : [],
      });
    }

    let movies = await select('movie', ['id', 'title', 'release_year']);
    res.json(movies);
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { getMoviesController };
