const express 		 = require('express');
const router 		 = express();
var multer           = require('multer');
var path             = require('path');
const userController = require('../controllers/picture_controllers');

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
router.post('/upload',images.single('file'),userController.upload);
// router.post('/update',images.single('file'),userController.update);

module.exports = router;