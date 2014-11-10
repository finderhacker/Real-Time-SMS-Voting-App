var express = require('express');
var router = express.Router();
var ironWorker = require('iron_worker');
var client = new ironWorker.Client();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* POST receive SMS */
router.post('/sms', function(req, res){
  // change and extract the name from the sms message
  var name = req.param['name'];

  client.tasksCreate('vote', {name: name}, {}, function(err, body) {
    console.log(body);
  });

  // add a response
  res.send('');

});

module.exports = router;
