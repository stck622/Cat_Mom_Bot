var express = require('express');
const mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host     : '10.80.161.44',    // 호스트 주소
    user     : 'root',           // mysql user
    password : '1234',       // mysql password
 //   insecureAuth : true,
    database : 'catmom',         // mysql 데이터베이스
    port: 3306
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res) {
    var Dupli_Query = 'SELECT * FROM catmom.catlog';
    var D_query = connection.query(Dupli_Query, function(err, rows, id){
        res.json(rows);
    });
});

module.exports = router;
