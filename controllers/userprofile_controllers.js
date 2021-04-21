'use strict';
const userprofile = require('../models/userprofile_models.js');
const {genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign }= require('jsonwebtoken');

exports.signup = function(req,res){

};

exports.createprofile= function(req,res){
const id =req.params.id;
var data= req.body;
var img = req.file;
var splitextension  = req.file.filename.split(".");
  var fileUploadData = {
    filename: req.file.filename,
    path: req.protocol + '://' + req.get('host') +'/imgs/',
    extension: splitextension[0],
    file: req.protocol + '://' + req.get('host') +'/imgs/'+req.file.filename,
    tbl_column_id: req.body.tbl_column_id,
    type: req.body.type
  };

console.log(data);
if(!id ||!data.username || !data.about || !data.age || !data.weight || !data.height  ){
  res.status(400).send({status:400, success:false, message: 'Please provide complete fields' });
}
if(!img){
  res.status(400).send({status:400, success:false, message: 'Please choose file' });
}
console.log(data);

userprofile.createprofile(fileUploadData,data,id,function(err,result){
    if(err){
        res.status(400).json({success:false, status:400, message:"result.message", data:err });
    }
    else
    {
      res.status(200).json({ status:200 , success: true , message: result.message , data: result.data});
    }
    });
};
