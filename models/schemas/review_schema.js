const db  = require('../db'); 
const mongoose = require('mongoose');

var Schema = db.Schema({
  review_id: {type:String,required:true,trim:true},
  review_message: {type:String,required:true,trim:true},
  review_date: {type:Date,required:true,trim:true,default: Date.now},
  product_id: {type:String,required:true,trim:true}
});

// compile schema to model
module.exports = db.model('reviewData', Schema, 'reviews');