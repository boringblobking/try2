const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Mohmag111:Mohmag078@cluster0.w5sp9.mongodb.net/?retryWrites=true&w=majority")

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

module.exports = mongoose.model('requests', requestSchema)