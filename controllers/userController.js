const UserRepository = require('../repositories/userRepository')

function createUser(req, res){
  let userInfo = req.body;
  UserRepository.addUser(userInfo, (err, userStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en DB: ${err} `});
    }
    else{
      res.status(200).send({user: userStored});
    }
  });
}

function editFav(req, res){
  let userId = req.params.userId;
  let noteId = req.params.noteId;
  UserRepository.editFav(userId, noteId, (err, user) =>{
    if(err){
      res.status(500).send({message:`Error al realizar la petición ${err}`});
    }
    else{
      res.status(200).send({user});
    }
  });
}

function getFavs(req, res){
  let userId = req.params.userId;
  UserRepository.getFavs(userId, (err, favs) =>{
    if(err){
      res.status(500).send({message:`Error al realizar la petición ${err}`});
    }
    else{
      res.status(200).send({favs});
    }
  })
}

module.exports = {
  createUser,
  editFav,
  getFavs
}
