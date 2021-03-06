const express = require('express')
const router = express.Router()
const movieController = require('../controller/movieController')

router.post('/addMovie', movieController.addingMovie)
router.delete('/deleteMovie/:user/:title', movieController.deleteMovie)
router.get('/getMovies/:user', movieController.getMovies)

module.exports = router
