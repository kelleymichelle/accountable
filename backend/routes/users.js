const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user')

router.route('/').get(function(req, res) {
  User.find(function(err, user) {
    if (err) {
      console.log(err)
    } else {
      res.json(user)
    }
  })
})

router.route('/add').post(function(req, res) {
  let user = new User({
    name: req.body.name
  })
  user.save()
    .then(user => {
      res.status(200).json({user})
    })
    .catch(err => {
      res.status(400).send("new user failed")
    })
})

module.exports = router