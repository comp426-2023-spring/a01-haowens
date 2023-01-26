const http = require("http"); 
const fs = require("fs");
var minimist = require('minimist')(process.argv.slice(2));

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
// Define a const `port` using the argument from the command line.

const host = 'localhost';
const port = minimist.port || 3000;

fs.readFile('./public/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  http.createServer(function (req, res)  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

// Define a const `server` as an arrow function using http.createServer.
// Use the documentation for the node.js http module.
// The function should have three responses:
// 1. status code 200,
// 2. set a header with content type `text/html`, and
// 3. end with the data that you are reading in from ./public/index.html.

 
// Start the `server` const listening on the port defined by argument in your `port` const.
// Put the exact message `Server listening on port ${port}` on the console log.

server.listen(port,() => {
    console.log(`Server listening on port ${port}`)})
});
