const Note = require('../models/note')

function getNote(noteId, next){
  Note.findById(noteId, next);
}

function getAllNotes(next){
  Note.find({}, next);
}

function addNote(text, userId, next){
  if(!text){
    next('El texto no puede ser vacío');
    return;
  }
  let note = new Note();
  note.text = text;
  note.creator = userId;
  note.save(next);
}

function getNotes(noteIds, next){
  Note.where('_id').in(noteIds)
    .sort('-date')
    .exec(next);
}

module.exports = {
  getNote,
  getAllNotes,
  addNote,
  getNotes
}
