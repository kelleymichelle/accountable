const mongoose = require('mongoose')
const Scheme = mongoose.Schema

let Accountable = new Schema({
  accountable_description: {
    type: String
  },
  accountable_user: {
    type: String
  }
})

module.exports = mongoose.model('Accountable', Accountable)