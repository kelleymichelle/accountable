const mongoose = require('mongoose')
const Schema = mongoose.Schema

let taskSchema = new Schema({
  title: String,
  description: String,
  user: Number
})

module.exports = mongoose.model('Task', taskSchema)