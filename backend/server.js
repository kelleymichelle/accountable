const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000

const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/accountable', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT)
})