const express = require('express');
const router = express.Router();
const jwtservice = require('../middleware/jwt');

/* GET penyanyi */
router.get('/generate', async function(req, res, next) {
    try {
        const token = await jwtservice.generateAccessToken({ username: req.body.username });
        res.json(token);
    } catch (err) {
        console.error(`Error while generating token: `, err.message);
        res.json({message: 'Error while generating token: ' + err.message});
    }
});

router.get('/validate', jwtservice.authenticateToken, (req, res) => {
    res.json({message: "Success!"});
  })
  
module.exports = router;