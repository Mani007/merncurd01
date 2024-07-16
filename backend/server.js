// import express

const express = require('express');

// create express instance
const app = express();

// import mongoose

// Routings 

app.get('/', (req, res) => {
  res.send('Hello World!');
});



// start the server 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

