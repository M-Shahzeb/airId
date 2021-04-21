const express = require('express');
const router = express.Router();
const password = require('../controllers/password_controllers');
const {checkToken} = require('../util/validation_token');

router.put('/password/:id',  password.password);
// router.post('/userprofile',  userprofile.userprofile);


module.exports= router;