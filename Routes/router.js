const express =require('express')
const router =new express.Router()
const empcontroller =require('../controllers/empcontroller');
const multerConfig =require('../middlewares/multerMiddleware');

// addUser router
router.post('/add',multerConfig.single("profile"), empcontroller.addUser)

// get all users
router.get('/get-all-users', empcontroller.getallUsers)
// delete user
router.delete('/delete-user/:id', empcontroller.deleteUser)
// edit user 
router.put('/edit-user/:id',multerConfig.single("profile"),empcontroller.editUser)


module.exports=router