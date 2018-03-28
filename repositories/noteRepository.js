const Note = require('../models/note')

function getNote(noteId, next){
  Note.findById(noteId, next);
}

function getAllNotes(next){
  Note.find({}, next);
}

function addNote(text, next){
  if(!text){
    next('El texto no puede ser vacío');
    return;
  }
  let note = new Note();
  note.text = text;
  note.save(next);
}

module.exports = {
  getNote,
  getAllNotes,
  addNote
}
