const {verify}= require("jsonwebtoken");
module.exports = {checkToken: (req, res, next)=>{
    let token = req.headers['token'];
//    let token= req.get("Authorization").slice(7);
   

if(token){
   
verify(token,"kw123",(err,decoded)=>{
    if(err){
        res.json({success:0 , message:"invalid token"});
    }
    else{
        next();
    }
});
    }
    else {
       return res.json({success:false, message: "Access denied! unautherized user"});
    }
}}