const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const {request} = require("../database.js")
const {foodBankAcc} = require("../database.js")
const {beneficiaryAcc} = require("../database.js")
const {userSession} = require("../database.js")
const bcrypt = require('bcrypt')

router.post('/new-food-bank-account', async (req, res) => {
    // should really add some "this email has already been used functionality but thats long"
    console.log("server got post request for '/new-food-bank-account'")
    if (req.body.password1 == req.body.password2) {
        res.json({passwordsSame: true})
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password1, salt)
        const newFoodBank = new foodBankAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            salt: salt,
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
    // should really add some "this email has already been used functionality but thats long"
    console.log("server got post request for '/new-beneficiary-account'")
    if (req.body.password1 == req.body.password2) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password1, salt)
        const newBeneficiary = new beneficiaryAcc({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            salt: salt,
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
    const user = await userSession.findOne({ sessionID: req.body.session })
    if (user) {
    const foodBankRecord = await foodBankAcc.findOne({ email: user.user })
    const requests = await request.find({ requestedFoodBank: foodBankRecord.name })
    res.end(JSON.stringify(requests))
    } else {
        console.log("users null see " + user)
    }
});

router.post('/get-food-bank-name', async (req, res) => {
    const user = await userSession.findOne({ sessionID: req.body.session })
    if (user) {
    const foodBankRecord = await foodBankAcc.findOne({ email: user.user })
    res.end(foodBankRecord.name)
    } else {
        console.log("users null see " + user)
    }
});

router.post('/get-beneficiary-name', async (req, res) => {
    const user = await userSession.findOne({ sessionID: req.body.session })
    if (user) {
    const beneficiaryRecord = await beneficiaryAcc.findOne({ email: user.user })
    res.end(beneficiaryRecord.name)
    } else {
        console.log("users null see " + user)
    }
});

router.post('/get-user-type', async (req, res) => {
    const user = await userSession.findOne({ sessionID: req.body.session })
    const userIsAFoodBank = await foodBankAcc.find({ email: user.user })
    const userIsABeneficiary = await beneficiaryAcc.find({ email: user.user })
    if (userIsAFoodBank.length != 0) {
        res.json({ userType: "food bank" })
    } else if (userIsABeneficiary.length != 0) {
        res.json({ userType: "beneficiary" })
    } else {
        res.json({ userType: "rekt" })
        console.log("it seems some user has managed to get a session ID that is unrelated to any account in the database")
    }
})

router.post('/login', async (req, res) => {
    console.log("looking for email "  + req.body.email)
    const user = await foodBankAcc.findOne({email: req.body.email})
    if (user) {
        console.log("its a food bank")
        console.log(user)
        const hashedPassword = await bcrypt.hash(req.body.password, user.salt)
        if (hashedPassword == user.password) {
            const newSession = new userSession({
                sessionID: req.body.session,
                user: user.email
            })
            try {
                await newSession.save()
                res.json({ result: "food bank successful login" })
            } catch (err) {
                console.log("error saving session on login")
            }
        } else {
            res.json({ result: "food bank wrong password" })
        }
    } else {
        const user = await beneficiaryAcc.findOne({email: req.body.email})
        if (user) {
            console.log("its a beneficiary")
            console.log(user)
            const hashedPassword = await bcrypt.hash(req.body.password, user.salt)
            console.log(hashedPassword)
            if (hashedPassword == user.password) {
                const newSession = new userSession({
                    sessionID: req.body.session,
                    user: user.email
                })
                try {
                    await newSession.save()
                    res.json({ result: "beneficiary successful login" })
                } catch (err) {
                    console.log("error saving session on login")
                }
            } else {
                res.json({ result: "beneficiary wrong password" })
            }
        } else {
            console.log("its niether")
            res.json({ result: "wrong email" })
        }
    }
});

router.post('/logout', async (req, res) => {
    await userSession.deleteOne({ sessionID: req.body.session })
    res.end("successfully deleted session")
})

module.exports = router;