# node-api-rest

## rutas (localhost:3000)
  - POST /api/users - crea un usuario (name*, firstName, mail*, phoneNumber)(*obligatorio) y lo devuelve
  - POST /api/users/:userId/notes - crea una nota cuyo creador es el usuario (text*)
  - PUT /api/users/:userId/notes/:noteId/fav - marcar/desmarca esa nota como favorita para ese usuario
  - GET /api/users/:userId/notes/fav - devuelve todas las notas favoritas de un usuario
  - GET /api/notes - devuelve todas las notas
  - GET /api/notes/:noteId - devuelve una nota 
  
## pasos
  - Crear varios usuarios 
  - Con la id de un usuario puedes crear notas
  - Con la id de un usuario y una nota puedes marcarla como favorita
