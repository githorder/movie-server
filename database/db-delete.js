const knex = require('./db.js');

const delWhere = async (table, whereObj, selectArr = ['*']) => {
  try {
    return await knex(table).where(whereObj).del(selectArr);
  } catch (err) {
    throw err;
  }
};

module.exports = { delWhere };
