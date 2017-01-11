var http = require('http');

var PORT1 = 7000;

var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! You are awesome! Path Hit: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT1);

}); 

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("No dice!! You need some more practice! No path hit: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

}); 
