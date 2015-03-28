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

/* GET projects page. */
router.get('/projects.html', function(req, res, next) {
  res.render('other', { title: 'My Projects' });
});

/* GET contace me page. */
router.get('/contactme.html', function(req, res, next) {
  res.render('other', { title: 'Trying to Build Contact With Me?' });
});

module.exports = router;
