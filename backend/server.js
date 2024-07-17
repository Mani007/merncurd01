// Load env variables 

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  

// import dependancies
const express = require('express');
const connectToDb = require('./config/connectToDb')
const Note = require('./models/note')  // importing note instead of Note as the filename in models folder is note.js
const noteController = require('./controllers/noteController'); // importing all the fuctions from note controller
// create express instance
const app = express();
app.use(express.json());

// import mongoose
connectToDb()

// Routings 

// create a new note
app.post('/notes', noteController.createNote);

// get all notes
app.get('/notes', noteController.fetchNotes)

// fetch or get note by id
app.get('/notes/:id', noteController.fetchById )

// update a note
app.put('/notes/:id', noteController.updateNotebyId )

app.delete('/notes/:id', noteController.deleteNoteById)

// start the server 
const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

