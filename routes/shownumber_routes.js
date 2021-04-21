const express = require('express');
const router = express.Router();
const showNumber = require('../controllers/shownumber_controllers');
const {checkToken} = require('../util/validation_token');

router.get('/showNumberById/:id', showNumber.showNumberById);


module.exports= router;