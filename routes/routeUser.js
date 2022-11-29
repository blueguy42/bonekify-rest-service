const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../services/user');

/* GET penyanyi */
router.get('/users', async function(req, res, next) {
  try {
    res.json(await user.getUsers());
  } catch (err) {
    console.error(`Error while getting list of users: `, err.message);
    return res.json({message: 'Error while getting list of users: ' + err.message});
  }
});

router.post('/create', async function(req, res, next) {
  const { username, password, email, name } = req.body;
  try {
    const usernames = (await user.getUsername())['data'];
    const emails = (await user.getEmail())['data'];
    if (usernames.some(e => e.username == username) || emails.some(e => e.email == email)) {
      throw new Error('email and/or username already exists');
    } 
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    res.json(await user.createUser(username, hashPassword, email, name));
  } catch (err) {
    console.error(`Error in creating user: `, err.message);
    return res.json({message: 'Error in creating user: ' + err.message});
  }
});
  
module.exports = router;