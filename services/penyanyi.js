const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPenyanyi(){
    const rows = await db.query(
      `SELECT user_id, name
      FROM User WHERE isAdmin=0`
    );
    const data = helper.emptyOrRows(rows);
  
    return {data};
}

module.exports = {
    getPenyanyi
}