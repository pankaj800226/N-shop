const mongoose = require('mongoose');

const productDataSaveSchema = new mongoose.Schema({
    imgUrl: String,
    // name: String,
    // tital: String,
    // price: Number,
    // rating: Number,
    // sizes: [String],
    // qtys: [Number],
    // subTital: String
})

const productModul = mongoose.model('productData', productDataSaveSchema);

module.exports = productModul