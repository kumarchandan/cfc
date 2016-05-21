var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('assets', { title : 'Assets' });
});

router.get('/api', function (req, res, next) {
  res.send({
    msg: 'hello from api'
  });
})
module.exports = router;
