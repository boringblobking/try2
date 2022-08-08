const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://Mohmag111:Mohmag078@cluster0.w5sp9.mongodb.net/?retryWrites=true&w=majority")

const requestSchema = new mongoose.Schema({
    requestedFoodBank: String,
    requestingOrganization: String,
    email: String,
    needQuantity: Number,
    helpType: String,
    requestingOrganizationType: String,
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    completed: {
        type: Boolean,
        default: false
    },
    label: String
})

const foodBankAccSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phoneNumber: String,
    helpType: String
})

const beneficiaryAccSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phoneNumber: String,
    organizationType: String
})

const sessionSchema = new mongoose.Schema({
    sessionID: String,
    user: String
})

module.exports = {
    foodBankAcc: mongoose.model('foodBankAcc', foodBankAccSchema),
    beneficiaryAcc: mongoose.model('beneficiaryAcc', beneficiaryAccSchema),
    request: mongoose.model('request', requestSchema),
    userSession: mongoose.model('session', sessionSchema),
    connection: connection}