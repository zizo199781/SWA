var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.links({ home :'https://calc1611.eu-gb.mybluemix.net/'});
});

module.exports = router;
