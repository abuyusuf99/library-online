const {genreController} = require("../controllers/genre.controller")
const {Router} = require("express")
router = Router()

router.post('/Admin/Genres',genreController.createGenre)
router.get('/Admin/Genres',genreController.gitGenres)
router.delete('/Admin/Genre/:id',genreController.deleteGenre)
router.patch('/Admin/Genre/:id',genreController.patchGenre)
router.get('/Admin/Genre/:id',genreController.gitGenreId)
module.exports = router