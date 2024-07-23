// Load env variables 

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  

// import dependancies
const express = require('express');
const cors = require('cors')
const connectToDb = require('./config/connectToDb')
const Note = require('./models/note')  // importing note instead of Note as the filename in models folder is note.js
const {createNote,fetchNotes,fetchById,updateNotebyId,deleteNoteById} = require('./controllers/noteController'); // importing all the functions from note controller
const {signup,login,logout} = require('./controllers/userController'); // importing all the functions from user controller
// create express instance
const app = express();
app.use(express.json());
app.use(cors())
// import mongoose
connectToDb()

// Routings 
app.post('/signup', signup);

app.post('/login', login);
app.get('/logout', logout);

// create a new note
app.post('/notes', createNote);

// get all notes
app.get('/notes', fetchNotes)

// fetch or get note by id
app.get('/notes/:id', fetchById )

// update a note
app.put('/notes/:id', updateNotebyId )

app.delete('/notes/:id', deleteNoteById)

// start the server 
const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

