'use strict';
const auth = require('../models/shownumber_models.js');

exports.showNumberById = function(req,res){
    const userId= req.params.id;
    auth.showNumberById(userId, function(err,result){
    if(err){
      res.status(400).send({success:false, status:400, message:"Record Not  Found", data:err });
    }
    else
    {
      res.status(200).send({success:true, status:200, message:result.message, data: result.data});
    }
    
    });
    
    
      }
    
     