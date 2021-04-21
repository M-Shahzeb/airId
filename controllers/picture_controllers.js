'use strict';
var Picture = require('../models/picture_models.js');

exports.upload = function(req, res) { 
  var userData = req.body;
  // console.log(fileUploadData);
  var splitextension  = req.file.filename.split(".");
  var fileUploadData = {
    filename: req.file.filename,
    path: req.protocol + '://' + req.get('host') +'/imgs/',
    extension: splitextension[0],
    file: req.protocol + '://' + req.get('host') +'/imgs/'+req.file.filename,
    tbl_column_id: req.body.tbl_column_id,
    type: req.body.type
  };
  // console.log(req.body);
  Picture.upload(fileUploadData,userData, function(err, user) {
    if (err){
      res.status(400).json({ status: 400, success: false, message:"Uploading Failed", data: err });
    }
    else{
      res.status(200).json({ status: 200, success: true, message:"File Uploaded", data: user });
    }
  });
}; 


