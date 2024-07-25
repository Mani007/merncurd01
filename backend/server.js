// Load env variables 

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  

// import dependancies
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/connectToDb')
const Note = require('./models/note')  // importing note instead of Note as the filename in models folder is note.js
const requireAuth = require('./middleware/requireAuth')
const {createNote,fetchNotes,fetchById,updateNotebyId,deleteNoteById} = require('./controllers/noteController'); // importing all the functions from note controller
const {signup,login,logout, checkAuth} = require('./controllers/userController'); // importing all the functions from user controller
// create express instance
const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
 }
));
app.use(cookieParser());
// import mongoose
connectToDb()

// Routings 
app.post('/signup', signup);

app.post('/login', login);
app.get('/logout', logout);

// create a new note
app.post('/notes', requireAuth,createNote);

// get all notes
app.get('/notes',requireAuth, fetchNotes)

// test auth route
app.get('/checkauth',requireAuth,checkAuth)

// fetch or get note by id
app.get('/notes/:id',requireAuth, fetchById )

// update a note
app.put('/notes/:id',requireAuth, updateNotebyId )

app.delete('/notes/:id', requireAuth,deleteNoteById)

// start the server 
const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

