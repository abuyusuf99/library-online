const {userController} = require("../controllers/user.controllers")
const {Router} = require("express")
router = Router()

router.post('/Admin/Users',userController.createUser)
router.get('/Admin/Users',userController.gitUser)
router.delete('/Admin/User/:id',userController.deleteuser)
router.get('/Admin/User/:id',userController.gitUserId)
router.patch("/Admin/Users/:id",userController.patchUser)
module.exports = router