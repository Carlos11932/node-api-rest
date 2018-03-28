'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = Schema({
  name: {type: String, required: true},
  firstName: String,
  mail: {type: String, unique:true, required: true},
  phoneNumber: Number,
  favoriteNotes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
})

UserSchema.methods.editFav = function(noteId){
  let index = this.favoriteNotes.indexOf(noteId);
  index != -1 ? this.favoriteNotes.splice(index, 1) : this.favoriteNotes.push(noteId);
}

module.exports = mongoose.model('User', UserSchema);
