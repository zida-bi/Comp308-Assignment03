var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment03' });
});

/* GET other pages. */
router.get('/aboutme.html', function(req, res, next) {
  res.render('other', { title: 'About Me' });
});

module.exports = router;
