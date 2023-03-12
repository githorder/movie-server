const knex = require('./db.js');

const delWhere = async (table, whereObj) => {
  try {
    await knex(table).where(whereObj).del();
  } catch (err) {
    throw err;
  }
};

module.exports = { delWhere };
