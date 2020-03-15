var express = require('express');
var authController = require('../controllers/auth')
var authProduct = require('../controllers/products')
var router = express.Router();
const jwt = require('jsonwebtoken')

router
    .route('/auth/register')
    .post(authController.register);

router  
    .route('/all/products')
    .get(authProduct.show_product);

router  
    .route('/products')
    .post(authProduct.create_product);


router
    .route('/auth/login')
    .post(authController.tokenizer);

require('./user')(router)


const checkAuth = (req,res,next)=>{
    if(!req.headers.token){
        res.send('unauthorized user')
    }
    else{
        jwt.verify(req.headers.token, 'secretkey', function(err, decoded){
        if(!err){

            next();
        } 
        else {
            res.send('unauthorized access');
        }
          })}}   

router.use(checkAuth)





require('./reviews')(router)

router.all('*', function(req, res) {
    res.send("invalid url " + String(req.url));
  })


module.exports = router;
