// read configuration file
var config = require('./config');
var Pusher = require("pusher");
var pusher = new Pusher({
    appId: config.PUSHER_APP_ID,
    key: config.PUSHER_KEY,
    secret: config.PUSHER_SECRET
});

// dependencies
var redis = require('then-redis').createClient(config.REDIS_URI);

function voteForName(name){
  // increase the vote for the name
  redis.hincrby("votes", name, 1).then(function(res){
    console.log(res);
    
    // push the result with pusher
    pusher.trigger('votes', 'update', {name: name});
  });
  
}

require('./payload_parser').parse_payload(process.argv, function (payload){
  voteForName(payload.name);
});