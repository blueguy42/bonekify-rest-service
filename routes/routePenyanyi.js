const express = require('express');
const router = express.Router();
const penyanyi = require('../services/penyanyi');

/* GET penyanyi */
router.get('/', async function(req, res, next) {
    try {
      return res.json(await penyanyi.getPenyanyi());
    } catch (err) {
      console.error(`Error while getting list of penyanyi: `, err.message);
      return res.json({message: 'Error while getting list of penyanyi: ' + err.message});
    }
  });
  
module.exports = router;