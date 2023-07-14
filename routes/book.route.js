const {bookController} = require("../controllers/book.controller")
const {Router} = require("express")
router = Router()

router.post('/Admin/Books',bookController.createBook)
router.get('/Books',bookController.gitBooks)
router.delete('/Admin/Book/:id',bookController.deleteBook)
router.patch('/Admin/Book/:id',bookController.getisrented)
router.get('/Book/:id',bookController.gitBookId)
router.get('/Admin/Books/isrented',bookController.getisrented)


module.exports = router
