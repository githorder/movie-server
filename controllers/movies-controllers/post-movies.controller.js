const { insertInto } = require('../../database/db-insert.js');

const postMoviesController = async (req, res) => {
  try {
    const data = req.body;
    await insertInto('movie', data);
    res.json(data);
  } catch (err) {
    res.sendDBErrorJson(err);
  }
};

module.exports = { postMoviesController };
