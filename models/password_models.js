'use strict';
 var sql = require('../util/database');
 var utils = require('../util/utils.js');

 var Signup = function(user){
 
 }

 Signup.password = function(userRecord,id, result){

	
	//  sql.query("SELECT * FROM `user` WHERE  `phone` = ?",  userRecord.phone, function(err,res){
	 sql.query("SELECT * FROM `user` WHERE  `id` = ?  ",  [id], function(err,res){
    // check on email exist in DB or not
	
 if(res == ''){           //         

result(null, { message:"user are not registered yet!", data:res});
 }
 else{

   
                sql.query("update `user` SET `password`= ? WHERE id = ?", [userRecord.password,id], function(err,res){
                    if(err){
                        result(err,null);
                    }
                    else
                    {
                       
                        result(null, { message:"password successfully settled", data:userRecord});
                    }
                });
 }
    });
 };


 module.exports = Signup;