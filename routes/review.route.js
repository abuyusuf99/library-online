const {reviewController} = require("../controllers/review.controller")
const {Router} = require("express")
router = Router()

router.post('/Reviews',reviewController.createReview)
router.get('/Reviews',reviewController.gitReview)
router.delete('/Reivew/:id',reviewController.deleteReview)
router.patch('/Review/:id',reviewController.patchReview)
router.get('/Review/:id',reviewController.gitReviewId)
module.exports = router