'use strict'

const express = require('express')
const noteController = require('../controllers/noteController')
const userController = require('../controllers/userController')
const api = express.Router()

api.get('/notes', noteController.getNotes)
api.get('/notes/:noteId', noteController.getNote)
api.post('/users/:userId/notes', noteController.createNote) //con un login esto debería ir a api/notes
api.post('/users', userController.createUser)
api.put('/users/:userId/notes/:noteId/fav', userController.editFav) //con un login esto debería ir a api/notes/:noteId/fav
api.get('/users/:userId/notes/fav', userController.getFavs)

module.exports = api
