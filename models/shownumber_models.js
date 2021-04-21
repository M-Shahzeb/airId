'use strict';
var sql = require('../util/database');

var Signup = function(user){

}


Signup.showNumberById= function(userId, result){
    sql.query("SELECT `country_code` ,`phone` FROM user WHERE id = ?", userId , function(err,res){
        console.log();
		if(err){
			
			result(err,null);
		}else if(res ==''){
			console.log(res);
			result(null,{message:"Record Not Found!", data:res});
		}else{
			result(null,{message:`Your Number is ${res[0].country_code}${res[0].phone} ` , data:res});
		}

	});
}


 module.exports = Signup;