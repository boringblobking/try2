const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const {request} = require("../database.js")
const {foodBankAcc} = require("../database.js")
const {beneficiaryAcc} = require("../database.js")
const {userSession} = require("../database.js")
const bcrypt = require('bcrypt')

router.post('/new-food-bank-account', async (req, res) => {
    console.log("server got post request for '/new-food-bank-account'")
    if (req.body.password1 == req.body.password2) {
        res.json({passwordsSame: true})
        const hashedPassword = await bcrypt.hash(req.body.password1, 10)
        const newFoodBank = new foodBankAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            typeOfHelp: req.body.helpType
        })
        const newFoodBankSession = new userSession({
            sessionID: req.body.cookie,
            user: req.body.email
        })
        try {
            console.log("saving new food bank account and session to db")
            await newFoodBank.save()
            await newFoodBankSession.save()
            res.json({userSaved: true})
        } catch (err) {
            console.log("error saving new food bank acc and session to db")
        }
    } else {
        res.json({userSaved: false})
    }
});

router.post('/new-beneficiary-account', async (req, res) => {
    console.log("server got post request for '/new-beneficiary-account'")
    if (req.body.password1 == req.body.password2) {
        const hashedPassword = await bcrypt.hash(req.body.password1, 10)
        const newBeneficiary = new beneficiaryAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            organizationType: req.body.organization
        })
        const newBeneficiarySession = new userSession({
            sessionID: req.body.cookie,
            user: req.body.email
        })
        try {
            console.log("saving new beneficary account and session to db")
            await newBeneficiary.save()
            await newBeneficiarySession.save()
            res.json({userSaved: true})
        }   catch (err) {
            console.log('error saving new beneficiary acc and session to db')
        }
    } else {
        res.json({userSaved: false})
    }
});

router.post('/request-form', async (req, res) => {
    console.log(req.sessionID)
    const newRequest = new request({
        requestedFoodBank: req.body.requestedFoodBank,
        requestingOrganization: req.body.requestingOrganization,
        email: req.body.email,
        needQuantity: req.body.needQuantity,
        helpType: req.body.helpType,
        requestingOrganizationType: req.body.requestingOrganizationType,
        label:req.body.label 
    })
    try {
        console.log("saving help request to db")
        await newRequest.save()
        } catch(err) {
        console.log('error saving help request to db');
    }
    res.redirect('/beneficiary-request')
});

router.post('/support-requests', async (req, res) => {
    console.log(req.body.session)
    const user = await userSession.findOne({ sessionID: req.body.session })
    console.log(user)
    const foodBankRecord = await foodBankAcc.findOne({ email: user.user })
    console.log(foodBankRecord) 
    const requests = await request.find({ requestedFoodBank: foodBankRecord.name })
    console.log(requests)
    res.end(JSON.stringify(requests));
});

router.post('/get-user-type', async (req, res) => {
    const user = await userSession.findOne({ sessionID: req.body.session })
    const userIsAFoodBank = await foodBankAcc.find({ email: user.user })
    const userIsABeneficiary = await beneficiaryAcc.find({ email: user.user })
    console.log(userIsAFoodBank)
    console.log(userIsABeneficiary)
    if (userIsAFoodBank.length != 0) {
        res.json({ userType: "food bank" })
    } else if (userIsABeneficiary.length != 0) {
        res.json({ userType: "beneficiary" })
    } else {
        console.log("it seems some user has managed to get a session ID that is unrelated to any account in the database")
    }
})

module.exports = router;