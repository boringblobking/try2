const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const {request} = require("../database.js")
const {foodBankAcc} = require("../database.js")
const {beneficiaryAcc} = require("../database.js")
const bcrypt = require('bcrypt');

router.post('/new-food-bank-account', async (req, res) => {
    console.log("yep")
    if (req.body.password1 != req.body.password2) {
        // need to implement a message that is returned to notify the user
        // that the account wasn't created as the passwords didn't match
        res.redirect('/food-bank-sign-up')
    } else {
        const hashedPassword = await bcrypt.hash(req.body.password1, 10)
        const newFoodBank = new foodBankAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            typeOfHelp: req.body.helpType
        });
        try {
            console.log("saving new food bank account to db")
            await newFoodBank.save()
        } catch (err) {
            console.log('error saving new food bank acc to db')
        }
    res.redirect('/food-bank-requests')
    }
});

router.post('/new-beneficiary-account', async (req, res) => {
    console.log("yep")
    if (req.body.password1 != req.body.password2) {
        // need to implement a message that is returned to notify the user
        // that the account wasn't created as the passwords didn't match
        res.redirect('/beneficiary-sign-up')
    } else {
        const hashedPassword = await bcrypt.hash(req.body.password1, 10)
        const newBeneficiary = new beneficiaryAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            organizationType: req.body.organizationType
        });
        try {
            console.log("saving new beneficary account to db")
            await newBeneficiary.save()
        } catch (err) {
            console.log('error saving new beneficiary acc to db')
        }
    res.redirect('/beneficiary-request')
    }
});

router.post('/request-form', async (req, res) => {
    const newRequest = new request({
        requestedFoodBank: req.body.requestedFoodBank,
        requestingOrganization: req.body.requestingOrganization,
        email: req.body.email,
        needQuantity: req.body.needQuantity,
        helpType: req.body.helpType,
        requestingOrganizationType: req.body.requestingOrganizationType,
        label:req.body.label 
    });
    try {
        console.log("saving help request to db")
        await newRequest.save()
        } catch(err) {
        console.log('error saving help request to db');
    }
    res.redirect('/beneficiary-request')
});

router.get('/support-requests', async (req, res) => {
    const data = await request.find({})
    res.end(JSON.stringify(data));
});

module.exports = router;