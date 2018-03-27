const Note = require('../models/note')

function getNote(req, res){
  let noteId = req.params.noteId;
  Note.findById(noteId, (err, note) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    res.status(200).send({note});
  })
}

function getNotes(req, res){
  Note.find({}, (err, notes) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    res.status(200).send({notes});
  })
}

function createNote(req, res){
  let note = new Note();
  note.text = req.body.text;
  saveNote(note);
}

function saveNote(note){
  note.save((err, noteStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en DB: ${err} `});
    }
    res.status(200).send({note: noteStored});
  });
}

module.exports = {
  getNote,
  getNotes,
  createNote
}
