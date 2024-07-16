// Load env variables 

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  

// import express
const express = require('express');
const connectToDb = require('./config/connectToDb')

// create express instance
const app = express();

// import mongoose
connectToDb()

// Routings 

app.get('/', (req, res) => {
  res.send('Hello World!');
});



// start the server 

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

