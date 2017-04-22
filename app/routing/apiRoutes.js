var bodyParser = require("body-parser");
var friends = require("../data/friends.js");


module.exports = function(app){

  app.get("/api/friends", function(req,res){
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var yourScore = req.body;
    var bestMatch = 0;
    var lowestSum = 50;

    for(i = 0; i < friends.length; i++) {
      for(j = 0; j < friends[i].scores.length; j++) {
        var currentSum = parseFloat(yourScore.scores[j]) - parseFloat(friends[i].scores[j]);
        if(currentSum > 0) {
          var sum =+ currentSum
        };
      };

      if(sum < lowestSum){
        bestMatch = i;
      };
    };
      friends.push(req.body);
      console.log("Best Match is: "+ friends[bestMatch]);
      res.send(friends[bestMatch]);
  });

  app.post("/api/clear", function(){
    friends = [];
    console.log(friends);
  });
};