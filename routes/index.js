var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Hi HI hi!' });
// });
// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/wow/', function(req, res, next) {
  res.send('WoW! WoW! blah blah blah');
});

router.get('/test/', function(req, res, next) {
    var nameQs = req.query.name;
    // res.send('<h1>Test Test Test</h1>');
  if (req.query.name){
    res.send(`<p>Welcome to this page ${nameQs} </p>`);
  }else{
    res.send(`<p>Welcome to this page user </p>`);
  }
});

module.exports = router;
