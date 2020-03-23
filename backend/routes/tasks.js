const express = require('express')
const router = express.Router()
// import mongoose from 'mongoose'

const Task = require('../models/task')

router.route('/').get(function(req, res) {
  Task.find(function(err, task) {
    if (err) {
      console.log(err)
    } else {
      res.json(task)
    }
  })
})

router.route('/add').post(function(req, res) {
  let task = new Task({
    title: req.body.title,
    description: req.body.description
  })
  task.save()
    .then(task => {
      res.status(200).json({task})
    })
    .catch(err => {
      res.status(400).send("new task failure")
    })
})

module.exports = router
