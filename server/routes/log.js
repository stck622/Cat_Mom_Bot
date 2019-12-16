var express = require('express');
var mysql = require('mysql');
const path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();

var connection = mysql.createConnection({
  host     : '10.80.161.44',    // 호스트 주소
  user     : 'root',           // mysql user
  password : '1234',       // mysql password
//   insecureAuth : true,
  database : 'catmom',         // mysql 데이터베이스
  port: 3306
});

connection.connect();


app.use(express.static(path.join(__dirname + '/public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/../public/html/log.html'));
});

router.get('/data', function(req, res, next) {
  var logs = {
    botnumber: req.param('botnumber'),
    time: req.param('time'),
    imagepath: req.param('imagepath')
  }

  if(logs.botnumber != undefined){
    connection.query('INSERT INTO catmom.catlog(botnumber, time, imagepath) values(?, ?, ?)', [logs.botnumber, logs.time, logs.imagepath], function(error, results, fields) {
      console.log(results);
      res.end('200');
    });
  }
  else{
    console.log('안들어옴');
    res.end('400');
  }
  
});

module.exports = router;
