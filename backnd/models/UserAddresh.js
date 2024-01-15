const mongoose = require('mongoose')

const AddreshSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    phone: {
        type: Number,
        require: true
    },

    pincode: {
        type: Number,
        require: true
    },

    state: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    housenNo: {
        type: Number,
        require: true
    },

    road: {
        type: String,
        require: true
    },
})

const AddreshModel = mongoose.model('UsersAddresh', AddreshSchema)

module.exports = AddreshModel