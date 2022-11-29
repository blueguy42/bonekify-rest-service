const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers(){
    const result = await db.query(
      `SELECT user_id, email, password, username, name, isAdmin FROM User`
    );
    const data = helper.emptyOrRows(result);
  
    return {data};
}

async function getUsername(){
  const result = await db.query(
    `SELECT username FROM User`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function getEmail(){
  const result = await db.query(
    `SELECT email FROM User`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}


async function createUser(username, password, email, name){
    const result = await db.query(
    `INSERT INTO User (email, password, username, name, isAdmin) VALUES ('${email}', '${password}', '${username}', '${name}', 0)`
    );
    
    let message = 'Error in creating user';
    if (result.affectedRows) {
        message = 'User created successfully';
      }

    return {message};
}

module.exports = {
    getUsers,
    getUsername,
    getEmail,
    createUser
}