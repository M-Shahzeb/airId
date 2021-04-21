'use strict';
 var sql = require('../util/database');
 var utils = require('../util/utils.js');

 var Signup = function(user){
 
 }




 Signup.userlist = function(result){
	// var shouser = new Promise(function(resolve, reject){
	sql.query("SELECT * FROM `user` ",function(err, res){
		console.log( );
		if(err){
			
			result(err,null);
		}else if(res == ''){
			console.log(res);
			result(null,{message:"No Record Found!", data:res});
		}else{
			result(null,{message:`${res.length} Record Found`, data:res});
		}
	});
}
// .............................
Signup.findUserById= function(userId, result){
    sql.query("SELECT * FROM user WHERE id = ?",userId , function(err,res){
		if(err){
			
			result(err,null);
		}else if(res ==''){
			console.log(res);
			result(null,{message:"Record Not Found!", data:res});
		}else{
			result(null,{message:`${res[0].username}  detail list`, data:res});
		}

	});
}


 module.exports = Signup;