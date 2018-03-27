'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Note = require('./models/note')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/api/notes', (req, res) => {
  Note.find({}, (err, notes) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    res.status(200).send({notes});
  })
})

app.get('/api/notes/:noteId', (req, res) => {
  let noteId = req.params.noteId;
  Note.findById(noteId, (err, note) => {
    if(err){
      res.status(500).send({message: `Error al realizar la petición ${err}`});
    }
    res.status(200).send({note});
  })
})

app.post('/api/notes', (req, res) => {
  let note = new Note();
  note.text = req.body.text;

  note.save((err, noteStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en DB: ${err} `});
    }
    res.status(200).send({note: noteStored});

  });
})

mongoose.connect('mongodb://localhost:27017/notesKubide', (err, res) => {
  if(err) {
    return console.log(`Error: ${err}`)
  }
  console.log('Conexion establecida')

  app.listen(port, () => {
    console.log(`API FUNCIONANDO en ${port}`)
  })
})
