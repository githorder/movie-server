const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'diyorbaynazarov',
    password: 'Universe2000@',
    database: 'movies-db',
  },
});

module.exports = knex;
