var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment03' });
});

/* GET about me page. */
router.get('/aboutme.html', function(req, res, next) {
  res.render('other', { title: 'About Me' });
});

/* GET projects pages. */
router.get('/projects.html', function(req, res, next) {
  res.render('other', { title: 'My Projects' });
});

module.exports = router;
