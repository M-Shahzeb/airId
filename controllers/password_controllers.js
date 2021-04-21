'use strict';
const password = require('../models/password_models.js');
const {genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign }= require('jsonwebtoken');

exports.signup = function(req,res){

};




exports.password= function(req,res){

  var data = req.body;
  var pass = data.password;
  var id= req.params.id;
var pattern = /^(?=.*[0-9a-zA-Z])(?=.*[~`!@#$%&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
var ress = pass.match( pattern );
      
  if( !pass || !ress ){
    
    res.status(400).send({status:400, success:false, message: "Please Enter a Valid Password" });
  
  }

  
  const salt = genSaltSync(10);
  const passw = hashSync(data.password, salt);
  data.password = passw;
  console.log(data);

password.password(data,id,function(err,result){
    if(err){
        res.status(400).json({success:false, status:400, message:"result.message", data:err });
    }
    else
    {
      res.status(200).json({ status:200 , success: true , message: result.message , data: result.data});
    }
    });
}
