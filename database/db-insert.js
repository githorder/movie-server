const knex = require('./db.js');

const insertInto = async (table, data, selectArr = ['*']) => {
  try {
    return await knex(table).insert(data, selectArr);
  } catch (err) {
    throw err;
  }
};

module.exports = { insertInto };
