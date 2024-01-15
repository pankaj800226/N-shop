const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true
    },

    comment: {
        type: String,
        require: true
    }
})

const authModule = mongoose.model('signUp', authSchema)

module.exports = authModule