const express = require('express');
const router = express.Router();

/* GET penyanyi */
router.get('/getpending', async function(req, res, next) {
    const soap = require('soap');
    const url = 'http://bonekify-soap-service:1401/?wsdl';
    soap.createClient(url, function(err, client) {
      if (err) console.error(err);
      else {
        client.getPendingSubscriber(function(err, response) {
          if (err) console.error(err);
          else {
            console.log(response);
            res.send(response);
          }
        });
      }
    });
  });
  
module.exports = router;