// Importing express
var express = require("express");
var app = express();

// handle requests and response
app.get('/', function(req, res){
   res.send("Hello World");
});

// post requests
app.post('/', function(req, res){
   res.send("Got a Post request")
});

// defining where to listen to

app.listen(3000, function(){
	console.log("server is listening on port 3000!")
});
