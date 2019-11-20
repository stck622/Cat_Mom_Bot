var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userss', function(req, res, next) {
    res.send(req.query);
});

module.exports = router;
