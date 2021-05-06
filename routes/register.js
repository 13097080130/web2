var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query)
    if (req.query.newusername.length() > 0) {
        res.send('你的注册合法');
    }
    res.send('注册界面');
});

module.exports = router;