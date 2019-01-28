var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
} 

function logMethod(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

var logStuff = [logOriginalUrl, logMethod]
router.get('/user/:id', logStuff, function (req, res) {
  res.send('User Info')
})


module.exports = router;
