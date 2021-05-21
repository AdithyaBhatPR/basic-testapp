var express = require('express');
var router = express.Router();

const launchtime = new Date('05/30/2021 10:00').getTime()

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime()
  const millisec_rem = parseInt(launchtime - currentTime)
  res.render('index', { title: 'My Cool App' , countdown: millisec_rem});
});

module.exports = router;
