const knex = require('./db.js');

const updateWhere = async (table, whereObj, updateObj) => {
  try {
    await knex(table).where(whereObj).update(updateObj);
  } catch (err) {
    throw err;
  }
};

module.exports = { updateWhere };
