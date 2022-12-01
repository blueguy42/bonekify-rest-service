const express = require('express');
const router = express.Router();
const subscription = require('../services/subscription');

/* GET penyanyi */
router.get('/pending', async function(req, res) {
  try{
    const soap = require('soap');
    const url = 'http://bonekify-soap-service:1401/?wsdl';
    const client = await soap.createClientAsync(url);
    const data = (await client.getPendingSubscriberAsync({}))[0]['return'];
    return res.status(200).json(data);

  }catch(err){
    res.status(400).json({message: 'Error while getting list of pending subscriptions: ' + err.message});
  }
})
  

router.post('/listlagu', async function (req,res){
  try{
    const soap = require('soap');
    const url = 'http://bonekify-soap-service:1401/?wsdl';
    const args = {
      arg0 : req.body["user_id"]
    }
    const client = await soap.createClientAsync(url);
    const subs = await client.getSubscribedAsync(args);
    const data = await subscription.getLaguPremium(subs[0]["return"]);
    return res.status(200).json(data);

  }catch(err){
    res.status(400).json({message: 'Error while getting premium song information: ' + err.message});
  }
})

module.exports = router;