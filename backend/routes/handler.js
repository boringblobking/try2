const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const request = require("../database.js")

router.post('/request-form', async (req, res) => {
    const newRequest = new request({
        requestedFoodBank: req.body.requestedFoodBank,
        requestingOrganization: req.body.requestingOrganization,
        email: req.body.requestData,
        needQuantity: req.body.needQuantity,
        helpType: req.body.helpType,
        requestingOrganizationType: req.body.requestingOrganizationType,
        label:req.body.label 
    });
    try {
        console.log("saving to db")
        await newRequest.save()
        }
    catch(err) {
        console.log('error saving to db');
    }
    res.redirect('/beneficiary-request')
});

router.get('/support-requests', async (req, res) => {
    const data = await request.find({})
    res.end(JSON.stringify(data));
    });

module.exports = router;