var pusher = new Pusher("xxxxxxxxxxxx");
var votesChannel = pusher.subscribe('votes');

votesChannel.bind('update', function(data){
  console.log(data);

  var currentValue = $("[data-name=\""+data.name+"\"]").data("value")
  var newValue = Number(currentValue)+1
  $("[data-name=\""+data.name+"\"]").data("value", newValue)
  $("[data-name=\""+data.name+"\"]").text(newValue)

  console.log($("[data-name=\""+data.name+"\"]"));
});
