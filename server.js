const express    = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var fs           = require('fs');
var http         = require('http');
const app        = express();
const port       = process.env.PORT || 3000;

// Connecting Server
app.listen(port);
console.log('Connected: '+port);

// Using Public Static Path
app.use(express.static('public'));
// Headers Support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Max-Age', 120);
    return res.status(200).json({});
  }
  next();
});

// Parser Settings
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Default Route
app.get('/', (req, res) => {
  res.send("Welcome To Home Stead Application");
});
const auth = require('./routes/auth_routes');
const userList = require('./routes/userListing_routes');
const showNumber = require('./routes/shownumber_routes');
const NickName = require('./routes/nickname_routes');
const userprofile = require('./routes/userprofile_routes');
const picture = require('./routes/picture_routes');
const password = require('./routes/password_routes');


app.use('/api/auth', auth);
app.use('/api/userList', userList);
app.use('/api/showNumber', showNumber);
app.use('/api/NickName', NickName);
app.use('/api/userprofile', userprofile);
app.use('/api/picture', picture);
app.use('/api/password', password);

