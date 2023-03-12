const { genres } = require('./get-genres.controller.js');

const postGenresController = (req, res) => {
  if (req.body.id) {
    const newGenre = req.body;
    genres.push(newGenre);
    res.json(newGenre);
  }

  if (Array.isArray(req.body)) {
    const newGenres = req.body;
    genres.push(...newGenres);
    res.json(newGenres);
  }
};

module.exports = { postGenresController };
