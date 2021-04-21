const express = require('express');
const router = express.Router();
const NickName = require('../controllers/nickname_controllers');
const {checkToken} = require('../util/validation_token');


router.put('/uploadNickName/:id', NickName.uploadNickName);
router.get('/showNickName/:id', NickName.showNickName);

module.exports= router;