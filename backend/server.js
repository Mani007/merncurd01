// Load env variables 

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  

// import dependancies
const express = require('express');
const connectToDb = require('./config/connectToDb')
const Note = require('./models/note')  // importing note instead of Note as the filename in models folder is note.js

// create express instance
const app = express();
app.use(express.json());

// import mongoose
connectToDb()

// Routings 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/notes', async (req, res) => {
    // get the data from request body
    const title = req.body.title;
    const content = req.body.content;
    // create a note with it
    const note = await Note.create({
        title: title,
        content: content
    });
    // respond with a new note
    res.status(201).json({note: note});
});

app.get('/notes', async (req, res) => {
    // get all notes
    const notes = await Note.find({});
    // respond with all notes
    res.status(200).json({notes: notes});
})

app.get('/notes/:id', async (req, res) => {
    // get one notes
    const id = req.params.id;  // get id from the request parameters
    //const note = await Note.findById({_id: id}); // this is correct
    const note = await Note.findById(id);
    // respond with one note
    res.status(200).json({yournoteis: note});
})

app.put('/notes/:id', async (req, res) => {
    // get the data from request body
    const id = req.params.id;  // get id from the request parameters
    const title = req.body.title;
    const content = req.body.content;
    // update a note with new data
    const note = await Note.findByIdAndUpdate(id, {title: title, content: content}, {new: true});
    // respond with updated note
    res.status(200).json({updatednote: note});
})

// start the server 

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

