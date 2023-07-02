const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const mongoUrl = 'mongodb://venkatreactjs:Venky7799@ac-tobec1f-shard-00-00.q315mof.mongodb.net:27017,ac-tobec1f-shard-00-01.q315mof.mongodb.net:27017,ac-tobec1f-shard-00-02.q315mof.mongodb.net:27017/?ssl=true&replicaSet=atlas-y586fq-shard-0&authSource=admin&retryWrites=true&w=majority';

//mongodb connection
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected!'))
  .catch((error) => {
    console.log(error);
  })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})