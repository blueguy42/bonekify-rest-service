const express = require('express');
const router = express.Router();
const penyanyi = require('../services/penyanyi');

/* GET penyanyi */
router.get('/', async function(req, res, next) {
    try {
      res.status(200).json(await penyanyi.getPenyanyi());
    } catch (err) {
      console.error(`Error while getting list of penyanyi: `, err.message);
      res.status(400).json({message: 'Error while getting list of penyanyi: ' + err.message});
    }
  });
  
module.exports = router;