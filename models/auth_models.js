'use strict';
const { AwsInstance } = require('twilio/lib/rest/accounts/v1/credential/aws');
 const sql = require('../util/database');
 const twillio_client = require('../config/twillio.js');
 const asyncHandler = require('../util/async.js');

 var Number_verification = function(userData){

}

// getting postman data in userRecord and return calculated data in result
Number_verification.register =   function(userData, result)
{
   const {country_code,phone,code}=  userData;
    const phone_no=`${country_code}${phone}`;
    sql.query("SELECT * FROM `user` WHERE `country_code`=? AND `phone`=? ", [country_code,phone] ,function(err,res){
 console.log(country_code);
 console.log(phone);
 console.log(phone_no);

     // check on number exist in DB or not
  if(res != ''){           
//  
result(err, {message:`${country_code}${phone} is already registered...`} );   
 
  }
  else{
    const channel = "sms";
 const phone_no=`${country_code}${phone}`;
    const results =  twillio_client.verify
          .services(process.env.TWILIO_SID)
          .verifications.create({
            to: phone_no,
            channel,
          });       
 result(null, { message:`verification code send to ${phone_no}`, data:res});
    }
});
}





Number_verification.phonecodeverification =  async function(userData, result)
{

    const {country_code,phone,code}=  userData;
    const phone_no=`${country_code}${phone}`;
    const verifi_code= code;
 
 const results = await  twillio_client.verify
            .services(process.env.TWILIO_SID)
            .verificationChecks.create({
                to:phone_no,
                code: verifi_code,
            });
            if(results.valid){
         console.log("valid code");
         
        sql.query("INSERT `user` SET `country_code`=?,`phone`=?",[country_code,phone],function(err,res){

            if(err){
             result(err,null);
             }else
             {
                 result(null,{message:"Number Verified successfully!"});
         
             }
               });
               }else {
                 result(null,{message:"Verification code incorrect"});
               }



}

module.exports = Number_verification;