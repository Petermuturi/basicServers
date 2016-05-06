// Importing express
var express = require("express");
var app = express();
var GitHubApi = require("github");
// handle requests and response
app.get('/', function(req, res){
   res.send("Hello Worldlllll");
});

 
var github = new GitHubApi({
    // required 
    version: "3.0.0",
    // optional 
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub 
    // pathPrefix: "/api/v3", // for some GHEs; none for GitHub 
    timeout: 5000,
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent 
    }
});

github.user.getFollowingFromUser({
    // optional: 
    // headers: { 
    //     "cookie": "blahblah" 
    // }, 
    user: "Petermuturi"
}, function(err, res) {
    console.log(JSON.stringify(res));
});


// defining where to listen to

app.listen(3000, function(){
	console.log("server is listening on port 3000!");
});
