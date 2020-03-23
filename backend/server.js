const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000
const accountableRoutes = express.Router()

let Accountable = require('./accountable.model')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/accountable', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

accountableRoutes.route('/').get(function(req, res) {
  Accountable.find(function(err, acc) {
    if (err) {
      console.log(err)
    } else {
      res.json(acc)
    }
  })
})

accountableRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id
  Accountable.findById(id, function(err, accountable) {
    res.json(accountable)
  })
})

accountableRoutes.route('/add').post(function(req, res) {
  let accountable = new Accountable(req.body)
  accountable.save()
  .then(accountable => {
    res.status(200).json({'accountable': 'accountable added successfully'})
  })
  .catch(err => {
    res.status(400).send('adding new accountable failed')
  })
})

app.use('/accountable', accountableRoutes)

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT)
})