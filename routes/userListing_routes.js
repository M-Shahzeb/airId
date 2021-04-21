const express = require('express');
const router = express.Router();
const userListing = require('../controllers/userListing_controllers');
const {checkToken} = require('../util/validation_token');

router.get('/userlist',  userListing.userlist);

router.get('/findUserById/:id', userListing.findUserById);

module.exports= router;