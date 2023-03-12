const knex = require('./db.js');

const selectAll = async (table) => knex(table);
const selectAllWhere = async (table, whereObj) => knex(table).where(whereObj);

const select = async (table, selectArr) =>
  knex.from(table).select(...selectArr);

const selectWhere = async (table, selectArr, whereObj) =>
  knex
    .from(table)
    .select(...selectArr)
    .where(whereObj);

module.exports = { select, selectAll, selectAllWhere, selectWhere };
