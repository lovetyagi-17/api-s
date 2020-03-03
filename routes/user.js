const userController = require('../controllers/user') 

module.exports = function(router) {


router.get('/', function (req, res) {

        userController.get_user(req,res)
    
})
  
  
router.delete('/:id', function (req, res) {
    userController.delete_user(req,res)
})


router.put('/:id', function (req, res) {
    userController.update_user(req,res)
})
 
router.get('/users_all', function (req, res) {
    userController.users(req,res)
})
  
}
