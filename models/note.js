'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NoteSchema = Schema({
  text: String,
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema);
