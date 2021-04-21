'use strict';
const auth = require('../models/userListing_models.js');
const {genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign }= require('jsonwebtoken');



// check list of users registered


exports.userlist = function(req,res){
console.log("shheuhksjdbsfbdjhbjhb is a good man ");


auth.userlist(function(err,result){
console.log(result);
if(err){
  res.status(400).send({success:false, status:400, message:result.message, data:err });
}
else
{
  res.status(200).send({success:true, status:200, message:result.message, data: result.data});
}
});
};
// .........................................
exports.findUserById = function(req,res){
const userId= req.params.id;
auth.findUserById(userId, function(err,result){
if(err){
  res.status(400).send({success:false, status:400, message:"Record Not  Found", data:err });
}
else
{
  res.status(200).send({success:true, status:200, message:result.message, data: result.data});
}

});


  }

