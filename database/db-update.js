const knex = require('./db.js');

const updateWhere = async (table, whereObj, updateObj, selectArr = ['*']) => {
  try {
    return await knex(table).where(whereObj).update(updateObj, selectArr);
  } catch (err) {
    throw err;
  }
};

module.exports = { updateWhere };
