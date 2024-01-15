const mongoose = require('mongoose');

const feedBackSchema = new mongoose.Schema({
    comment: String,
    adminName:String,
})

const FeebBackModul = mongoose.model('UserFeedback', feedBackSchema);

module.exports = FeebBackModul