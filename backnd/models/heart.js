const mongoose = require('mongoose')

const hertSchema = new mongoose.Schema({
    click: {
        type: Boolean,
        default: false,
    }
})

const hertModel = mongoose.model('hert', hertSchema)

module.exports = hertModel