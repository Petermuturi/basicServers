 // Importing HTTP module
var http = require ('http');
var dispatcher = require('httpdispatcher');

// Defining which port to listen to.
const PORT = 8080;

// function to handle requests and send response
function manageRequest(request, response){
	 try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

// Creating the server
var server = http.createServer(manageRequest);

// Starting the server
server.listen(PORT, function(){
   // Callback trigger console log if it's listening.
   console.log("server is listening on: http://localhost:%s", PORT);
});