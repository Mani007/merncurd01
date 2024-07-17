const Note = require('../models/note');

const createNote = async (req, res) => {
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
}

const fetchNotes = async (req, res) => {
    // get all notes
    const notes = await Note.find({});
    // respond with all notes
    res.status(200).json({notes: notes});
}

const fetchById = async (req, res) => {
    // get one notes
    const id = req.params.id;  // get id from the request parameters
    //const note = await Note.findById({_id: id}); // this is correct
    const note = await Note.findById(id);
    // respond with one note
    res.status(200).json({yournoteis: note});
}

const updateNotebyId =  async (req, res) => {
    // get the data from request body
    const id = req.params.id;  // get id from the request parameters
    const title = req.body.title;
    const content = req.body.content;
    // update a note with new data
    const note = await Note.findByIdAndUpdate(id, {title: title, content: content}, {new: true});
    // respond with updated note
    res.status(200).json({updatednote: note});
}

const deleteNoteById = async (req, res) => {
    // get the id from request parameters
    const id = req.params.id;  // get id from the request parameters
    // delete a note
    await Note.findByIdAndDelete(id);
    // respond with success message
    res.status(200).json({message: 'Note deleted successfully'});
}

module.exports = {
    createNote: createNote,
    fetchNotes: fetchNotes,
    fetchById: fetchById,
    updateNotebyId: updateNotebyId,
    deleteNoteById: deleteNoteById,
 
}