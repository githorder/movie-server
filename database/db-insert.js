const knex = require('./db.js');

const insertInto = async (table, data) => {
  try {
    return await knex(table).insert(data);
  } catch (err) {
    throw err;
  }
};

module.exports = { insertInto };
