var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About Me'
  });
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me'
  });
});



/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});




/* Downloading the Resume with res.download: http://expressjs.com/en/api.html#res.download */
router.get('/download', function (req, res, next) {
  const file = './public/resume/ConnorWatsonResume2021.pdf';
  res.download(file);
});


module.exports = router;
