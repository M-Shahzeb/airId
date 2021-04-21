const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth_controllers');
const {checkToken} = require('../util/validation_token');

router.post('/registration', auth.register);

router.post('/code_verification',auth.phonecodeverification);


module.exports= router;