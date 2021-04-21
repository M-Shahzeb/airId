const express = require('express');
const router = express.Router();
const userprofile = require('../controllers/userprofile_controllers');
// var multer           = require('multer');
const {checkToken} = require('../util/validation_token');
var multer           = require('multer');
var path             = require('path');

// Profile Images Setting
var imageUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/');
  },
  filename: function (req, file, cb) {
	cb(null, Date.now() + path.extname(file.originalname));
  }
});

var images = multer({ storage: imageUpload });
// router.post('/upload',images.single('file'),userprofile.upload);

router.put('/createprofile/:id',images.single('file'),  userprofile.createprofile);



module.exports= router;