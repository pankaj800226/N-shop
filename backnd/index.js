const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const FeebBackModul = require('./models/Feebback');
// const authModule = require('./models/signup')
const AddreshModel = require('./models/UserAddresh');

// const productModul = require('./models/productDtataSave')
let PORT = 5000

//meddleware
const server = express();
server.use(cors())
server.use(bodyParser.json());
server.use(express.json());

//mogoDB database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');
  console.log('database connection');
}

//router
server.post('/add', (req, res) => {
  console.log(req.body);
  const comment = req.body.comment;
  const adminName = req.body.adminName;
  FeebBackModul.create({
    comment: comment,
    adminName: adminName,
  });
});

//find showData  display
server.post('/showTask', (req, res) => {
  // console.log(req.body);
  FeebBackModul.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

//delete
server.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  FeebBackModul.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error))
})


//UserAddresh feel
server.post('/addresh', (req, res) => {
  console.log(req.body);
  AddreshModel.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})



//server
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})


