'use strict';
var sql = require('../util/database');

var Signup = function(user){

}


Signup.uploadNickName = function(userRecord,id, result){
    sql.query("SELECT * FROM user WHERE `id` = ? ",  [id], function(err,res){
        if(err)
        {
        result(err,null);
        }
        else
        {
        if(res != '')
        {
            sql.query("SELECT `nickname` FROM `user` WHERE  `id`=? ",  [id], function(err,res){
   
                //    console.log(res[0].nickname);
                   
                if(res[0].nickname == userRecord.nickname){                 
                
                result(null, { message:"Nick Name already Registered", data:res});
                }
                
                else{
                
                    console.log("nick name inserting!");
                    sql.query("UPDATE `user` SET `nickname`=? WHERE `id`= ?", [userRecord.nickname, id], function(err,res){
                    if(err){
                        result(err,null);
                            }
                    else
                        {       
                        result(null, { message:"nick name succesfully inserted", data:userRecord});
                        }
                          });
                    }
                }); 
        }
        else{
            result(null, { message:"user not registered yet!", data:userRecord});
        }}
    }
    

    )};




Signup.showNickName = function(userId, result){
    sql.query("SELECT * FROM user WHERE `id` = ? ",  [userId], function(err,res){
        if(err)
        {
        result(err,null);
        }
        else
        {
    sql.query("SELECT  nickname FROM user WHERE id = ?", userId , function(err,res){
        
		if(err){
			
			result(err,null);
		}else if(res ==''){
			console.log(res);
			result(null,{message:"Record Not Found!", data:res});
		}else{
			result(null,{message:` ${res[0].nickname} is your Nick Name ` , data:res});
		}

	});
}});
}

 module.exports = Signup;