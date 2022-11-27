const express = require('express')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const app = express()
const port = 3000

// get config vars
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getToken', (req, res) => {
  res.send(process.env.TOKEN_SECRET);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})