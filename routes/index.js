var express = require('express');
var router = express.Router();
var ironWorker = require('iron_worker');
var client = new ironWorker.Client();
var redis = require('then-redis').createClient(process.env.REDIS_URI);


/* GET home page. */
router.get('/', function(req, res) {
  redis.hgetall('votes').then(function(data){
    res.render('index', { title: 'Votes' , votes: data});
  });
});

/* POST receive SMS */
router.post('/sms', function(req, res){
  // change and extract the name from the sms message
  var name = req.param['name'];

  client.tasksCreate('vote', {name: name}, {}, function(err, body) {
    console.log(body);
    res.json(JSON.stringify(body));
  });
});

module.exports = router;
