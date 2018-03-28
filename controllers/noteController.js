const NoteRepository = require('../repositories/noteRepository')

function getNote(req, res){
  let noteId = req.params.noteId;
  NoteRepository.getNote(noteId, (err, note) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    else{
      res.status(200).send({note});
    }
  })
}

function getNotes(req, res){
  NoteRepository.getAllNotes((err, notes) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    else {
      res.status(200).send({notes});
    }
  })
}

function createNote(req, res){
  let text = req.body.text;
  NoteRepository.addNote(text, (err, noteStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en DB: ${err} `});
    }
    else{
      res.status(200).send({note: noteStored});
    }
  });
}

module.exports = {
  getNote,
  getNotes,
  createNote
}
