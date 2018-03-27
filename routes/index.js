'use strict'

const express = require('express')
const noteController = require('../controllers/noteController')
const api = express.Router()

api.get('/notes', noteController.getNotes)
api.get('/notes/:noteId', noteController.getNote)
api.post('/notes', noteController.createNote)

module.exports = api
