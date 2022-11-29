const express = require('express');
const router = express.Router();
const penyanyi = require('../services/penyanyi');

/* GET penyanyi */
router.get('/', async function(req, res, next) {
    try {
      res.json(await penyanyi.getPenyanyi());
    } catch (err) {
      console.error(`Error while getting list of penyanyi`, err.message);
      next(err);
    }
  });
  
module.exports = router;