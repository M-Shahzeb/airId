'use strict';

var sms =  require('../models/auth_models');
const asyncHandler = require('../util/async.js');
const emailer = require('../models/auth_models');


exports.register = (req,res,next)=>{

    
       const {country_code,phone}=  req.body;
        // console.log(phone);
        const phone_no=`${country_code}${phone}`;
    if (!req.body.country_code || !req.body.phone || req.body.phone.trim().length < 10) {
        res.status(200).json({message:"Please enter a valid data", success:false, status:"200"});
      }
sms.register(req.body, function(err,result){
 if(err){
res.status(400).json({message:result.message, success:false, status:"400", data:err});
 }else{
    console.log("send is working");
    res.status(200).json({message:result.message, success:true, status:"200", data:result.data});
 }

});
}



exports.phonecodeverification = asyncHandler(async (req,res,next)=>{

    const verificationData = req.body;
        
        console.log(verificationData);
    if (!req.body.code || !req.body.phone || req.body.phone.trim().length < 10) {
        res.status(200).json({message:"Please enter a valid data", success:false, status:"200"});
      }
      
    
   
sms.phonecodeverification(verificationData, function(err,result){
 if(err){
res.status(400).json({message:"Phone number does not verify", success:false, status:"400", data:err});
 }else{
    console.log("send is working");
    res.status(200).json({message:"verification checked", success:true, status:"200", data:result});
 }

});

}); 