const genres = [
  { id: 1, genre_name: 'detective' },
  { id: 2, genre_name: 'romance' },
  { id: 3, genre_name: 'horror' },
];

const getGenresController = (req, res) => {
  if (req.params.id) {
    const genre = genres.find((genre) => genre.id === +req.params.id);

    if (!genre) {
      return res.json({});
    }

    res.json(genre);
    return;
  }

  res.json(genres);
};

module.exports = { getGenresController, genres };
