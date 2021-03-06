'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NoteSchema = Schema({
  text: {type: String, required: true},
  creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema);
