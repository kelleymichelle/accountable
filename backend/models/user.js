const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  tasks: [[]]
  
})

// let tasksSchema = new Schema({
//   task_title : {
//     type: String
//   },
//   task_user: {
//     type: Number
//   },
//   task_date: {
//     type: Date,
//     default: Date.now
//   }
// })

module.exports = mongoose.model('User', userSchema)
