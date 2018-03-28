const User = require('../models/user')
const NoteRepository = require('./noteRepository')

function getUser(userId, next){
  User.findById(userId, next);
}

function addUser(userInfo, next){
  if(!userInfo.name || !userInfo.mail){
    next('El nombre y el mail son obligatorios');
    return;
  }
  let user = new User();
  user.name = userInfo.name;
  user.firstName = userInfo.firstName;
  user.mail = userInfo.mail;
  user.phoneNumber = userInfo.phoneNumber;
  user.save(next);
}

function editFav(userId, noteId, next){
  NoteRepository.getNote(noteId, (err) => {
    if(err){
      next('La nota no existe');
      return;
    }
  });
  getUser(userId, (err, user) => {
      if(err){
        next('No existe el usuario');
        return;
      }
      user.editFav(noteId);
      user.save(next);
  });

}

function getFavs(userId, next){
  getUser(userId, (err, user) => {
    if(err){
      next('No existe el usuario');
      return;
    }
    NoteRepository.getNotes(user.favoriteNotes, next);
  });
}

module.exports = {
  getUser,
  addUser,
  editFav,
  getFavs
}
