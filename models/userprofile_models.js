'use strict';
 var sql = require('../util/database');
 var utils = require('../util/utils.js');

 var Signup = function(user){
 
 }

 Signup.createprofile = function(picture, userRecord,id, result){

	 console.log("userRecord is working",userRecord);
	//  sql.query("SELECT * FROM `user` WHERE  `phone` = ?",  userRecord.phone, function(err,res){
	 sql.query("SELECT * FROM `user` WHERE  `id` = ?  ",  [id], function(err,res){
    // check on email exist in DB or not
	
 if(res != ''){   

    sql.query("UPDATE `user` SET `pic`=? ,`username`=?, `about`=?, `weight`=?, `age`=?, `height`=? WHERE id=?", [picture.file,userRecord.username,userRecord.about,userRecord.weight,userRecord.age,userRecord.height,id], function(err,res){
        if(err){
            result(err,null);
        }
        else
        {
            var userid = res.insertId;
            userRecord.id = userid;
            result(null, { message:"Profile Created Succesfully", data:userRecord});
        }
    });

 }
 else{
    result(null, { message:"User Not Registered!", data:res});
  
 }
    });
 };


 module.exports = Signup;