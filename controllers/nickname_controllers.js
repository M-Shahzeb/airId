'use strict';
const auth = require('../models/nickname_models.js');



exports.uploadNickName = function(req,res){
    const userdata= req.body;
    const id = req.params.id;
    auth.uploadNickName(userdata,id, function(err,result){
    if(err){
      res.status(400).send({success:false, status:400, message:"Record Not  Found", data:err });
    }
    else
    {
      res.status(200).send({success:true, status:200, message:result.message, data: result.data});
    }
    });
    }

    
      exports.showNickName = function(req,res){
        const userId= req.params.id;
        auth.showNickName(userId, function(err,result){
        if(err){
          res.status(400).send({success:false, status:400, message:"Record Not  Found", data:err });
        }
        else
        {
          res.status(200).send({success:true, status:200, message:result.message, data: result.data});
        }
        
        });
        
        
          }