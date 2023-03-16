const knex = require('./db.js');

const selectAll = async (table) => {
  try {
    return await knex(table);
  } catch (err) {
    throw err;
  }
};

const selectAllWhere = async (table, whereObj) => {
  try {
    return await knex(table).where(whereObj);
  } catch (err) {
    throw err;
  }
};

const select = async (table, selectArr) => {
  try {
    return await knex.from(table).select(...selectArr);
  } catch (err) {
    throw err;
  }
};

const selectWhere = async (table, selectArr, whereObj) => {
  try {
    return await knex
      .from(table)
      .select(...selectArr)
      .where(whereObj);
  } catch (err) {
    throw err;
  }
};

module.exports = { select, selectAll, selectAllWhere, selectWhere };
