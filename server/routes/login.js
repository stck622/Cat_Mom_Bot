var express = require('express');
var mysql = require('mysql');
const path = require('path');
var router = express.Router();

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
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
  res.sendFile(path.resolve(__dirname + '/../public/html/login.html'));
});

// router.post('/auth', function(request, response) {
// 	var username = request.body._id;
// 	var password = request.body._pw;
// 	if (username && password) {
// 		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

module.exports = router;
