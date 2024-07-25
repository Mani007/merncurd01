const Note = require('../models/note');

const createNote = async (req, res) => {
    // get the data from request body
    const {title, content} = req.body;
    //const content = req.body.content;
    // create a note with it

    try {

        const note = await Note.create({
            title: title,
            content: content
        });
        // respond with a new note
        res.status(201).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error at create note');
    }
}

const fetchNotes = async (req, res) => {
    // get all notes
    try {

        const notes = await Note.find({});
        // respond with all notes
        res.status(200).json( notes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error at fetch');
    }
}

const fetchById = async (req, res) => {
    // get one notes
    const id = req.params.id;  // get id from the request parameters
    //const note = await Note.findById({_id: id}); // this is correct
    try {

        const note = await Note.findById(id);
        // respond with one note
        res.status(200).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error at fetch by id');
    }
}

const updateNotebyId =  async (req, res) => {
    // get the data from request body
    const id = req.params.id;  // get id from the request parameters
    const {title, content} = req.body;
    //const title = req.body.title;
    //const content = req.body.content;
    // update a note with new data
    try {

        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
        // respond with updated note
        res.status(200).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error at update by id');
    }
}

const deleteNoteById = async (req, res) => {
    // get the id from request parameters
    const id = req.params.id;  // get id from the request parameters
    // delete a note
    try {

        await Note.findByIdAndDelete(id);
        // respond with success message
        res.status(200).json({message: 'Note deleted successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error at delete by id');
    }
 }

module.exports = {
    createNote,
     fetchNotes,
     fetchById,
     updateNotebyId,
     deleteNoteById,
 
}