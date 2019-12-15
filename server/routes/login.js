var express = require('express');
const path = require('path');
var router = express.Router();

var app = express();

app.use(express.static(path.join(__dirname + '/public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/../public/html/login.html'));
});

module.exports = router;
